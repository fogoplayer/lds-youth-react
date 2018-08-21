import { render } from "react-dom";
import React from "react";

const BasicCardButton = props => (
  <div className="col s12 m6">
    <a href={props.url} target="_blank">
      <div className="card">
        <div className="card-content">
          <span className="card-title black-text">{props.title}</span>
        </div>
      </div>
    </a>
  </div>
);

export default BasicCardButton;
