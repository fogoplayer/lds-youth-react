import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

import ImageCardButton from "./ImageCardButton";
import BasicCardButton from "./BasicCardButton";

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
  </div>,
  <div>
    {/*<!--PP card-->
                <div class="col s12">
                    <Link
                        <div class="card horizontal">
                            <div class="card-image">
                                <img src="images/pp.jpg">
                            </div>
                            <div class="card-stacked">
                                <div class="card-content">
                                    <h4>Personal Progress</h4>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
            <div class="row">

                <!--Contact the Developer card-->
                <div class="col s12 l6">
                    <a class="black-text" href="https://goo.gl/forms/mhCJvscVsMq4EM973" target="_blank">
                        <div class="card horizontal">
                            <div class="card-stacked">
                                <div class="card-content">
                                    <h4>Contact the Developer</h4>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <!--Contribute card-->
                <div class="col s12 l6">
                    <a class="black-text" href="https://github.com/fogoplayer/LDSYouth" target="_blank">
                        <div class="card horizontal">
                            <div class="card-stacked">
                                <div class="card-content">
                                    <h4>Contribute</h4>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

            </div>*/}
  </div>
];

export default Home;
