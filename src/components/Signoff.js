/*global firebase*/
import React from "react";

class Signoff extends React.Component {
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
      firebase.database().ref('/users/' + firebase.auth().currentUser.uid + "/" + window.location.pathname + "/" + this.props.id).once('value').then(response => {
        if (response.val()) {
          this.setState({ text: JSON.parse(JSON.stringify(response.val())) });
        }
      });
    }
    catch (error) {
      if (error.message !== "Cannot read property 'uid' of null") { console.error(error); }
    }
  }

  componentWillUnmount() {
    let dataObj = {}
    dataObj[this.props.id] = document.getElementById(this.props.id).innerHTML;
    try {
      firebase.database().ref('/users/' + firebase.auth().currentUser.uid + "/" + this.state.windowLocation + "/").update(dataObj);
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