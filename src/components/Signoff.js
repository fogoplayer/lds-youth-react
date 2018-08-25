import React from "react";
import { render } from "react-dom";

const Signoff = props => (
  <div
    contentEditable="true"
    className={
      "textArea " +
      (props.color ? props.color + " lighten-4" : "grey lighten-2")
    }
    id={props.id}
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
    {props.placeholder ? props.placeholder : ""}
  </div>
);

export default Signoff;
