/* global M */
/* global firebase */
import React from "react";
import { Link } from "react-router-dom";
import Signin from "./Signin";

class Navbar extends React.Component { // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = { displayName: "Sign In" };
  }
  componentDidMount() {
    //Initialize materialize components
    let elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {
      alignment: "right",
      constrainWidth: false,
      coverTrigger: false,
      closeOnClick: false
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ displayName: firebase.auth().currentUser.displayName })
      }
      else {
        this.setState({ displayName: "Sign In" })
      }
    });
  }
  render() {
    return (<div className="navbar-fixed">
      <Signin />
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
              <li>
                <a className="dropdown-trigger" id="signInDropdownTrigger" data-target="signInDropdown">
                  <i className="material-icons left">account_circle</i>{this.state.displayName}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>);
  }
}
export default Navbar;
