import React from "react";
import { Link } from "react-router-dom";

const CollapsibleHeader = props => (
  <div
    className="collapsible-header"
    id={props.text.toLowerCase().replace(" ", "-")}
  >
    <h4>{props.text}</h4>
  </div>
);

export default CollapsibleHeader;
