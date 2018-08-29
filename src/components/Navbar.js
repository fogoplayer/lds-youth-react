import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper black row">
        <div className="col s12">
          <a data-target="sidenav" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <Link to="/" className="brand-logo">
            {props.brand}
          </Link>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;
