/*global firebase*/
import React from "react";

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.placeholder ? this.props.placeholder : "",
      windowLocation: window.location.pathname.substring(1)
    };
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      this.componentWillUnmount();
    });
    document.getElementById(this.props.id).addEventListener("onblur", () => {
      this.componentWillUnmount();
    })
    try {
      firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then(response => {
        const data = response.data()[this.state.windowLocation] ? response.data()[this.state.windowLocation][this.props.id] : false;
        if (data) {
          this.setState({ text: JSON.parse(JSON.stringify(data)) });
        }
      });
    }
    catch (error) {
      if (error.message !== "Cannot read property 'uid' of null") { console.error(error); }
      else {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            this.componentDidMount();
          }
        });
      }
    }
  }

  componentWillUnmount() {
    let dataObj = {};
    dataObj[this.state.windowLocation]={};
    dataObj[this.state.windowLocation][this.props.id] = document.getElementById(this.props.id).innerHTML;
    try {
      firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set(dataObj, { merge: true });
    }
    catch (error) {
      if (error.message !== "Cannot read property 'uid' of null") { console.error(error); }
    }
  }


  render() {
    return (
      <div
      contentEditable="true"
      className="textArea"
      id={this.props.id}
      color={this.props.color ? this.props.color : "black"}
      style={{
        display: "inline-block",
        width: "calc(100% - 2px)",
        border: "1px solid black",
        minHeight: "28px",
        marginBottom: "11px"
      }}
    >
      {this.state.text}
    </div>
    );
  }
}
export default TextArea;

/*
Migration process:
replace firebase.database() with firebase.firestore()
Replace ref('/users/' with collection("users")
replace | + firebase.auth().currentUser.uid + | with doc(firebase.auth().currentUser.uid)
Replace dataObj[this.props.id] with 
    dataObj[this.state.windowLocation]={};
    dataObj[this.state.windowLocation][this.props.id] = document.getElementById(this.props.id).innerHTML;
Replace | + "/" + this.state.windowLocation + "/").update(dataObj)| with .set(dataObj, { merge: true })

Replace | + "/" + window.location.pathname + "/" + this.props.id).once('value').then(response => {| with .then(response=>)
Add const data = response.data()[this.state.windowLocation][this.props.id];
Replace response.val() with data
*/