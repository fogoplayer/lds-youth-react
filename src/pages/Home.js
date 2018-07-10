import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

import ImageCardButton from "../components/ImageCardButton";
import BasicCardButton from "../components/BasicCardButton";

const Home = props => [
  <div className="row">
    <ImageCardButton title="Duty to God" url="duty-to-god" />
    <ImageCardButton title="Personal Progress" url="personal-progress" />
  </div>,
  <div className="row">
    <BasicCardButton
      title="Contact the Developer"
      url="https://goo.gl/forms/mhCJvscVsMq4EM973"
    />
    <BasicCardButton
      title="Contribute"
      url="https://github.com/fogoplayer/lds-youth-react"
    />
  </div>
];

export default Home;
