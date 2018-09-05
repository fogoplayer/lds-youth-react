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
    firebase.database().ref('/users/' + firebase.auth().currentUser.uid + "/" + window.location.pathname + "/" + this.props.id).once('value').then(response => {
        if(response.val()) {
          this.setState({ text: JSON.parse(JSON.stringify(response.val())) });
        }
    });
  }
  
  componentWillUnmount(){
    let dataObj = {}
    dataObj[this.props.id] = document.getElementById(this.props.id).innerHTML;
    console.log(window.location.pathname)
    console.info('/users/' + firebase.auth().currentUser.uid + "/" + this.state.windowLocation + "/")
    firebase.database().ref('/users/' + firebase.auth().currentUser.uid + "/" + this.state.windowLocation + "/").update(dataObj);
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

// firebase.database().ref('users/' + firebase.auth().currentUser.uid).set({
//   name: name
// });
// import React from "react";

// const TextArea = props => (
//   <div
//     contentEditable="true"
//     className="textArea"
//     id={props.id}
//     color={props.color ? props.color : "black"}
//     style={{
//       display: "inline-block",
//       width: "calc(100% - 2px)",
//       border: "1px solid black",
//       minHeight: "28px",
//       marginBottom: "11px"
//     }}
//   >
//     {props.placeholder ? props.placeholder : ""}
//   </div>
// );

// export default TextArea;
