import React from "react";
import { render } from "react-dom";

const Navbar = props => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper black row">
        <div className="col s12">
          <a data-target="sidenav" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <a href="/" className="brand-logo">
            {props.brand}
          </a>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
