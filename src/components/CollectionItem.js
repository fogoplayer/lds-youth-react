import { render } from "react-dom";
import React from "react";
import { Link } from "react-router-dom";

const CollectionItem = props => (
  <li className="collection-item">
    <Link to={props.url}>
      <h5 style={{ color: "black" }}>{props.text}</h5>
    </Link>
  </li>
);

export default CollectionItem;
