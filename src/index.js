import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserHistory } from "react-router-dom";
import App from "./components/App";
import "./materialize.min.css";
import "./materialize.min.js";

ReactDOM.render(
  <BrowserRouter history={BrowserHistory}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
