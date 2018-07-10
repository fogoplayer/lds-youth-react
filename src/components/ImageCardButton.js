import { render } from "react-dom";
import React from "react";
import { Link } from "react-router-dom";

const ImageCardButton = props => (
  <div className="col s12 m6 black-text">
    <Link to={"/" + props.url}>
      <div className="card">
        <div className="card-image">
          <img
            src={"images/" + props.url + ".jpg"}
            alt={props.title + " Logo"}
          />
        </div>
        <div className="card-content">
          <span className="card-title black-text">{props.title}</span>
        </div>
      </div>
    </Link>
  </div>
);

export default ImageCardButton;
