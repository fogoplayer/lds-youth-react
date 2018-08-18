import { render } from "react-dom";
import React from "react";

const CollapsibleHeader = props => (
  <div class="collapsible-header">
    <h4>{props.text}</h4>
  </div>
);

export default CollapsibleHeader;
