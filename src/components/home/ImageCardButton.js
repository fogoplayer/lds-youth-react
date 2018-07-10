import { render } from "react-dom";
import React from "react";
import PropTypes from "prop-types";

const ImageCardButton = props => (
  <div className="col s12 m6">
    <a className="black-text" href="../LDSYouth/dutyToGod">
      <div className="card">
        <div className="card-image">
          <img src={"images/" + props.url + ".jpg"} />
        </div>
        <div className="card-content">
          <span className="card-title">{props.title}</span>
        </div>
      </div>
    </a>
  </div>
);

export default ImageCardButton;
