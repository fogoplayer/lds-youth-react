import React from "react";
import { render } from "react-dom";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let elems = document.querySelectorAll(".sidenav");
    this.sidenavInstances = M.Sidenav.init(elems, {});
    elems = document.querySelectorAll(".dropdown-trigger");
    this.dropdownInstances = M.Sidenav.init(elems, {});
  }

  render() {
    return (
      <div className="sidenav" id="slide-out">
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
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="#!">First Sidebar Link</a>
          </li>
          <li>
            <a href="#!">Second Sidebar Link</a>
          </li>
          <li>
            <a className="dropdown-trigger" href="#!" data-target="dropdown1">
              Dropdown<i className="material-icons right">arrow_drop_down</i>
            </a>
          </li>
          <ul id="dropdown1" className="dropdown-content">
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
        </ul>
      </div>
    );
  }
}
export default Sidebar;
