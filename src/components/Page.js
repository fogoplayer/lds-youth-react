import React from "react";
import { render } from "react-dom";

/*const Page = props => {
  const path = props.location.pathname.substring(1).split("/");
  console.log(path);
  let componentPath = "../pages";
  path.forEach(pathSegment => {
    componentPath += "/" + pathSegment;
  });
  componentPath += "/" + path[path.length - 1];
  console.log(import(componentPath));
  return (
    <div>
      <img />
    </div>
  );
};*/

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { module: null };
  }

  componentDidMount() {
    const path = this.props.location.pathname.substring(1).split("/");
    console.log(path);
    let componentPath = "../pages";
    path.forEach(pathSegment => {
      componentPath += "/" + pathSegment;
    });
    import(`${componentPath}`).then(module =>
      this.setState({ module: module.default })
    );
  }

  render() {
    console.log("Module:", this.state.module);

    const { module: Component } = this.state; // Assigning to new variable names @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    return <div>{Component && <Component />}</div>;
  }
}

export default Page;
