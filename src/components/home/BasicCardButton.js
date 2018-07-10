import { render } from "react-dom";
import React from "react";
import PropTypes from "prop-types";

const BasicCardButton = props => (
  <div class="col s12 m6">
    <div class="card">
      <div class="card-content">
        <span class="card-title">{props.title}</span>
      </div>
    </div>
  </div>
);

export default BasicCardButton;
