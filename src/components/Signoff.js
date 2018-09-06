/*global firebase*/
import React from "react";

class Signoff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.placeholder ? this.props.placeholder : "",
      windowLocation: window.location.pathname.substring(1)
    };
    const getData = () => {
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
          firebase.auth().onAuthStateChanged(user => {
            if (user) {
              getData()
            }
          });
        }
      }
    }
    getData()
  }

  componentDidMount() {
    window.addEventListener("beforeunload", () => {
      this.componentWillUnmount();
    });
    document.getElementById(this.props.id).addEventListener("onblur", () => {
      this.componentWillUnmount();
    })
    
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
    className={
      "textArea " +
      (this.props.color ? this.props.color + " lighten-4" : "grey lighten-2")
    }
    id={this.props.id}
    color="black"
    style={{
      display: "inline-block",
      width: "150px",
      fontSize: "18px",
      height: "26px",
      paddingBottom: "1.5px",
      textAlign: "center",
      marginBottom: "10px",
      border: "0px",
      borderBottom: "1px solid black"
    }}
  >
    {this.state.text}
  </div>
    );
  }
}
export default Signoff;