import React from "react";

import "../styles.css";
// import page from "./pages/personal-progress/welcome-to-personal-progress";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <p>
                <label>
                    <input type="checkbox" className="filled-in black" />
                    <span><a href={this.props.url}>{this.props.text}</a></span>
                </label>
            </p>
        )
    }
}

export default Page;
