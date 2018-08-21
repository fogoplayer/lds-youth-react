import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

import ImageCardButton from "../ImageCardButton";
import BasicCardButton from "../BasicCardButton";
import "../../styles.css";

const Home = props => [
  <div className="row">
    <ImageCardButton title="Duty to God" url="duty-to-god" />
    <ImageCardButton title="Personal Progress" url="personal-progress" />
  </div>,
  <div className="row">
    <BasicCardButton
      title="Contact the Developer"
      url="https://goo.gl/forms/sJsx9aksO5grGZKo1"
    />
    <BasicCardButton
      title="Contribute"
      url="https://github.com/fogoplayer/lds-youth-react"
    />
  </div>
];

export default Home;
