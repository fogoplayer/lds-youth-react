import React from "react";
import { ReactDOM } from "react-dom";

import "../styles.css";
// import page from "./pages/duty-to-god/deacon/spiritual-strength/review";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { module: null };
  }

  componentDidMount() {
    const path = this.props.location.pathname.substring(1).split("/");
    console.log(path);
    let componentPath = "./pages";
    path.forEach(pathSegment => {
      componentPath += "/" + pathSegment;
    });
    import(componentPath).then(module => {
      this.setState({ module: module.default });
    });
  }

  render() {
    const { module: Component } = this.state; // Assigning to new variable names @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    return <div>{Component && <Component />}</div>;
  }
}

export default Page;
