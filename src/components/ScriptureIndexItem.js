/*global firebase*/
import React from "react";

import "../styles.css";

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = { windowLocation: window.location.pathname };
    }

    componentDidMount() {
        window.addEventListener("beforeunload", () => {
            this.componentWillUnmount();
        });
        const elems = document.getElementsByClassName(this.textToId(this.props.text));
        for (let i = 0; i < elems.length; i++) {
            elems.item(i).addEventListener("onblur",
                () => {
                    this.componentWillUnmount();
                });
        }
        try {
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + "/" + window.location.pathname + "/" + this.textToId(this.props.text)).once('value').then(response => {
                if (response.val()) {
                    this.ref.current.checked = response.val();
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    }

    componentWillUnmount() {
        let dataObj = {}
        dataObj[this.textToId(this.props.text)] = this.ref.current.checked;
        try {
            firebase.database().ref('/users/' + firebase.auth().currentUser.uid + "/" + this.state.windowLocation + "/").update(dataObj);
        }
        catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <p>
                <label>
                    <input onClick={this.updateAllMatchesOnClick.bind(this)} ref={this.ref} type="checkbox" className={"filled-in black "+this.textToId(this.props.text)} />
                    <span><a href={this.props.url}>{this.props.text}</a></span>
                </label>
            </p>
        )
    }

    textToId(text) {
        return text.replace(/[^a-zA-Z0-9]/g, "_");
    }

    updateAllMatchesOnClick() {
        const elems = document.getElementsByClassName(this.textToId(this.props.text));
        for (let i = 0; i < elems.length; i++) {
            elems.item(i).checked = this.ref.current.checked;
        }
    }
}

export default Page;
