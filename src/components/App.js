/*global firebase navigator M*/
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
  }
  
  //Firebase
  // Firebase App is always required and must be first
  window.firebase = require("firebase/app");
  
  // Add additional services that you want to use
  require("firebase/auth");
  require("firebase/database");
  require("firebase/firestore");
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
    firebase.firestore().settings({ timestampsInSnapshots: true });
    firebase.firestore().enablePersistence()
      .catch(function(err) {
        if (err.code === 'failed-precondition') {
          alert("Warning: You have LDS Youth open in another tab, so your data will not be available while offline in this tab. You will still be able to access site content, but if you would like your content to sync offline please close the app elsewhere.");
        }
        else if (err.code === 'unimplemented') {
          M.toast({ html: "Warning: your browser does not support saving your data offline. Please update your browser if you would like to use LDS Youth without an internet connection" });
        }
      });
  }
  
  //Add to home screen
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    e.prompt();
  });
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
      <Switch>
        <Route path="/" component={props=>(<Sidenav key="sidenav" timestamp={new Date().toString()} {...props} />)} />
      </Switch>
    </div>
  );
}

export default App;