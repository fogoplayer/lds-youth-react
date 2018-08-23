import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, BrowserHistory } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <BrowserRouter history={BrowserHistory}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
