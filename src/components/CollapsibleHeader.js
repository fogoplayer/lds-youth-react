import React from "react";

const CollapsibleHeader = props => (
  <div
    className="collapsible-header"
    id={props.text.toLowerCase().replace(" ", "-")}
  >
    <h5>{props.text}</h5>
  </div>
);

export default CollapsibleHeader;
