import React from "react";
import { Link } from "react-router-dom";

const CollectionItem = props => (
  <li className="collection-item">
    <Link to={props.url}>
    <div>
      <h5 style={{ color: "black" }}>{props.text}</h5>
      </div>
    </Link>
  </li>
);

export default CollectionItem;
