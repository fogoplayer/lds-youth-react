/*global firebase*/
import React from "react";

class TextArea extends React.Component {
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
            document.getElementById(this.props.id).value = JSON.parse(JSON.stringify(data));
          }
        });
      }
      catch (error) {
        if (error.message !== "Cannot read property 'uid' of null") { console.error(error); }
        else {
          firebase.auth().onAuthStateChanged(user => {
            if (user) {
              getData();
            }
          });
        }
      }
    }
    getData();
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
    dataObj[this.state.windowLocation][this.props.id] = document.getElementById(this.props.id).value;
    try {
      firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set(dataObj, { merge: true });
    }
    catch (error) {
      if (error.message !== "Cannot read property 'uid' of null") { console.error(error); }
    }
  }


  render() {
    return (
      <div className="input-field">
        <textArea
          id={this.props.id}
          type="text"
          className="materialize-textarea"
          placeholder={this.props.placeholder}
        ></textArea>
      </div>
    );
  }
}
export default TextArea;

/*
contentEditable="true"
      className="textArea"
      color={this.props.color ? this.props.color : "black"}
      style={{
        display: "inline-block",
        width: "calc(100% - 2px)",
        border: "1px solid black",
        minHeight: "28px",
        marginBottom: "11px"
      }}
*/