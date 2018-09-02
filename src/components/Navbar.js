/* global M */
import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component { // eslint-disable-next-line
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    //Initialize materialize components
    let elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {
      alignment: "right",
      constrainWidth: false,
      coverTrigger: false,
    });
  }
  render() {
    return (<div className="navbar-fixed">
      <ul id="signinDropdown" className="dropdown-content">
        <li><h1>Coming soon</h1></li>
      </ul>
      <nav>
        <div className="nav-wrapper black row">
          <div className="col s12">
            <a data-target="sidenav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <Link to="/" className="brand-logo">
              {this.props.brand}
            </Link>
            <ul className="right">
              <li><a className="dropdown-trigger" data-target="signinDropdown"><i className="material-icons left">account_circle</i>Sign In</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>);
  }
}
export default Navbar;
