import React from "react";

const TextArea = props => (
  <div
    contentEditable="true"
    className="textArea"
    id={props.id}
    color={props.color ? props.color : "black"}
    style={{
      display: "inline-block",
      width: "calc(100% - 2px)",
      border: "1px solid black",
      minHeight: "28px",
      marginBottom: "11px"
    }}
  />
);

export default TextArea;
