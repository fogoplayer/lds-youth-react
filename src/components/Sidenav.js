import React from "react";
import { render } from "react-dom";

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //Initialize materialize components
    let elems = document.querySelectorAll(".sidenav");
    let instances = M.Sidenav.init(elems, {});
    elems = document.querySelectorAll(".collapsible");
    instances = M.Collapsible.init(elems, {});
  }

  render() {
    this.screenWidth = document.body.clientWidth;
    return (
      <ul className="sidenav sidenav-fixed" id="sidenav">
        <li>
          <a href="#!">First Sidebar Link</a>
        </li>
        <li>
          <a href="#!">Second Sidebar Link</a>
        </li>
        <li className="no-padding">
          <ul className="collapsible collapsible-accordion">
            <li>
              <a className="collapsible-header">
                Dropdown<i className="material-icons">arrow_drop_down</i>
              </a>
              <div className="collapsible-body">
                <ul>
                  <li>
                    <a href="#!">First</a>
                  </li>
                  <li>
                    <a href="#!">Second</a>
                  </li>
                  <li>
                    <a href="#!">Third</a>
                  </li>
                  <li>
                    <a href="#!">Fourth</a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}
export default Sidenav;
