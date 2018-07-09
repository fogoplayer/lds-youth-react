import React from "react";
import { render } from "react-dom";

const Navbar = props => (
  <div class="navbar-fixed">
    <nav>
      <div className="nav-wrapper black">
        <a data-target="slide-out" className="sidenav-trigger show-on-large">
          <i className="material-icons">menu</i>
        </a>

        <a href="/" className="brand-logo">
          Logo
        </a>
      </div>
    </nav>
  </div>
);

export default Navbar;
