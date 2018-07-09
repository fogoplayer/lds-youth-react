import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

import CardButton from "./CardButton";

const Home = props => (
  <div className="container">
    <div className="row">
      <CardButton title="Duty to God" url="duty-to-god" />
      <CardButton title="Personal Progress" url="personal-progress" />
    </div>
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
);

export default Home;
