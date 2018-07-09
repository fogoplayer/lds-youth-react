import React from "react";
import { render } from "react-dom";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./home/Home";
import Sidebar from "./Sidebar";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = props => (
  <div style={styles}>
    <Navbar brand="LDS Youth" />
    <Switch>
      <Route exact path="/" component={Home} />
      {/*<Route path="/duty-to-god/:" component={Page} />*/}
    </Switch>
    <Sidebar />
  </div>
);

export default App;
