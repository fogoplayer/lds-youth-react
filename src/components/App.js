import React from "react";
import { render } from "react-dom";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "../pages/Home";
import Sidenav from "./Sidenav";

const App = props => [
  <Navbar brand="LDS Youth" />,
  <div className="container">
    <Switch>
      <Route exact path="/" component={Home} />
      {/*<Route path="/duty-to-god/:" component={Page} />*/}
    </Switch>
  </div>,
  <Sidenav />
];

export default App;
