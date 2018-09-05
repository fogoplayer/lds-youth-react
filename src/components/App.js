/*global firebase navigator*/
import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Sidenav from "./Sidenav";

import Home from "./pages/Home";
import Page from "./Page";

const App = props => {
  if('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
    
    //Firebase
    // Firebase App is always required and must be first
    window.firebase = require("firebase/app");
  
    // Add additional services that you want to use
    require("firebase/auth");
    require("firebase/database");
    // require("firebase/firestore");
    // require("firebase/messaging");
    // require("firebase/functions");
  
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBJH95AqwCt56IB33qcb1teMzdl0pTpcPY",
      authDomain: "ldsyouth-195000.firebaseapp.com",
      databaseURL: "https://ldsyouth-195000.firebaseio.com",
      projectId: "ldsyouth-195000",
      storageBucket: "ldsyouth-195000.appspot.com",
      messagingSenderId: "431375642257"
    };
    
    if (!firebase || !firebase.apps.length) {
      firebase.initializeApp(config);
    }
  
  }
  return (
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
  );
}

export default App;
//      <Route path="/duty-to-god" component={Page} />
