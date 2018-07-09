import React from "react";
import { render } from "react-dom";

const Navbar = props => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper black">
        <div className="col s12">
          <a data-target="slide-out" className="sidenav-trigger show-on-large">
            <i className="material-icons">menu</i>
          </a>
          <a href="/" className="brand-logo">
            Logo
          </a>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
