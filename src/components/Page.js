import React from "react";
import { ReactDOM } from "react-dom";

import "../styles.css";
// import page from "./pages/personal-progress/welcome-to-personal-progress";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { module: null };
  }

  componentDidMount() {
    let path = this.props.location.pathname.substring(1).split("/");
    let componentPath = "";//"./pages";
    path.forEach(pathSegment => {
      componentPath += "/" + pathSegment;
    });
    if (componentPath.includes("the-family")) {
      componentPath = "./pages/common/the-family";
    }
    if (componentPath.includes("the-living-christ")) {
      componentPath = "./pages/common/the-living-christ";
    }
    const importComponent = componentPath => {
      import("./pages" + componentPath).then(
        //Success
        module => {
          //Use additional specifier to set active attributes
          this.setState({ module: module.default });
          if (
            componentPath.substring(7) !== window.location.pathname &&
            document.getElementById(
              window.location.pathname.substring(componentPath.length - 6)
            )
          ) {
            document
              .getElementById(
                window.location.pathname.substring(componentPath.length - 6)
              )
              .click();
          }
        },
        //Failure
        e => {
          console.error(e);
          //If user accidentally put a slash at the end, render anyway
          if (componentPath.charAt(componentPath.length - 1) === "/") {
            importComponent(
              componentPath.substring(0, componentPath.length - 1)
            );
          } else {
            let path = this.props.location.pathname.substring(1).split("/");
            path = path.slice(0, -1);
            let componentPath = "./pages";
            path.forEach(pathSegment => {
              componentPath += "/" + pathSegment;
            });
            importComponent(componentPath);
          }
        }
      );
    };
    importComponent(componentPath);
  }

  render() {
    const { module: Component } = this.state; // Assigning to new variable names @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    return <div>{Component && <Component />}</div>;
  }
}

export default Page;
