/* global firebase */
import React from "react";
import "firebaseui/dist/firebaseui.css";
import * as firebaseui from "firebaseui";


class Signin extends React.Component { // eslint-disable-next-line
        constructor(props) {
            super(props);
            this.state = { currentUserBool: !!firebase.auth().currentUser };
        }
        componentDidMount() {
            // FirebaseUI config.
            var uiConfig = {
                callbacks: {
                    signInSuccess: function(para1) {
                        console.error(para1);
                    }
                },
                signInOptions: [
                    // Leave the lines as is for the providers you want to offer your users.
                    firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                    // firebase.auth.TwitterAuthProvider.PROVIDER_ID,

                ],
                credentialHelper: firebaseui.auth.CredentialHelper.NONE
            };

            // Initialize the FirebaseUI Widget using Firebase.
            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            // The start method will wait until the DOM is loaded.
            ui.start('#firebaseui-auth-container', uiConfig);
            if (ui.isPendingRedirect()) {
                ui.start('#firebaseui-auth-container', uiConfig);
            }

            //Change state 
            firebase.auth().onAuthStateChanged(user => {
                this.setState({ currentUserBool: !!firebase.auth().currentUser });
            });
        }
        render() {
            console.log("rerender", firebase.auth().currentUser);
            if (!this.state.currentUserBool) {
                return (<li id = "firebaseui-auth-container" ></li>);
            }
            else {
                return ( <li className = "black-text"
                    onClick = {function() {
                        console.warn('Click');
                        firebase.auth().signOut();
                    }} ><a>Sign Out</a></li>);
                }
            }
        }
        export default Signin;
