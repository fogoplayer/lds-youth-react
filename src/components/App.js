import React from "react";
import { render } from "react-dom";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

import Home from "./pages/Home";
import Page from "./Page";

const App = props => [
  <Navbar key="navbar" brand="LDS Youth" />,
  <div key="container" className="container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/" component={Page} />
      <Route path="/duty-to-god" component={Page} />
    </Switch>
  </div>,
  <Sidenav key="sidenav" />
];

export default App;
