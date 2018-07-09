import { render } from "react-dom";
import React from "react";
import PropTypes from "prop-types";

const CardButton = props => (
  <div className="col s12">
    <a className="black-text" href="../LDSYouth/dutyToGod">
      <div className="card">
        <div className="card-image">
          <img src="images/sample-1.jpg" />
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>
            <span className="card-title">{props.bookletTitle}</span>
          </p>
        </div>
      </div>
    </a>
  </div>
);

export default CardButton;
