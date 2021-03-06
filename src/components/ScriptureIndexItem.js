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
            firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).get().then(response => {
                         const data = response.data()[this.state.windowLocation] ? response.data()[this.state.windowLocation][this.textToId(this.props.text)] : false;
                 if (data) {
                    this.ref.current.checked = data;
                }
            });
        }
        catch (error) {
            if (error.message !== "Cannot read property 'uid' of null") { console.error(error); }
        }
    }

    componentWillUnmount() {
        if (document.getElementById(this.props.id)) {
            let dataObj = {};
            dataObj[this.state.windowLocation] = {};
            dataObj[this.state.windowLocation][this.textToId(this.props.text)] = this.ref.current.checked;
            try {
                firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set(dataObj, {
                    merge: true
                });
            }
            catch (error) {
                if (error.message !== "Cannot read property 'uid' of null") {
                    console.error(error);
                }
            }
        }
    }

    render() {
        return (
            <p>
                <label onFocus={ () => { if (!firebase.auth().currentuser && !window.beenThereDoneThat) { alert("Warning: you are not signed in. If you would like your work to be saved, sign in."); window.beenThereDoneThat = true; } } }>
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
