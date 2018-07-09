import React from "react";
import { render } from "react-dom";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./home/Home";
import Sidebar from "./Sidebar";

const App = props => (
  <div>
    <Navbar brand="LDS Youth" />
    <Switch>
      <Route exact path="/" component={Home} />
      {/*<Route path="/duty-to-god/:" component={Page} />*/}
    </Switch>
    <Sidebar />
  </div>
);

export default App;
