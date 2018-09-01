import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

import Home from "./pages/Home";
import Page from "./Page";

const App = props => {
  if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js');
}
  return(
  <div>
    <Navbar key="navbar" brand="LDS Youth" />
    <div key="container" className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/"
          component={props => (
            <Page timestamp={new Date().toString()} {...props} />
          )}
        />
      </Switch>
    </div>
    <Sidenav key="sidenav" />
  </div>
);}

export default App;
//      <Route path="/duty-to-god" component={Page} />
