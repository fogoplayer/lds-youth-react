/* global firebase M event*/
import React from "react";


class Signin extends React.Component { // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = { currentUserBool: !!firebase.auth().currentUser };
    }
    componentDidMount() {
        //Change state 
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ currentUserBool: !!firebase.auth().currentUser });
        });
    }
    render() {
        if (!this.state.currentUserBool) {
            return (<ul id="signInDropdown" className="dropdown-content">
                <li>
                    <a className="black-text" style={{width:"300px"}}>
                        <p >Sign Up with Email</p>
                        <div className="input-field">
                            <input id="name" type="text" tabindex="1"  onKeyDown={function(event){console.error(event);event.stopPropagation()}}/>
                            <label for="name">Name</label>
                        </div>
                        <div className="input-field">
                            <input id="email" type="text" tabindex="2"  onKeyDown={function(event){event.stopPropagation()}}/>
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input id="password1" type="password" tabindex="3"  onKeyDown={function(event){event.stopPropagation()}}/>
                            <label for="password1">Password</label>
                        </div>
                        <div className="input-field">
                            <input id="password2" type="password" data-error="Passwords must match" tabindex="4"  onKeyDown={function(event){event.stopPropagation()}}/>
                            <label for="password2">Re-enter Password</label>
                        </div>
                        <br/>
                        <div class="btn black right" onClick={this.signUpWithEmail}>Sign up</div>
                        <div class="btn-flat right" tabindex="5" onClick={()=>{
                            this.setState({currentUserBool:"signIn"});
                        }}>Sign in</div>
                        <br />
                    </a>
                </li>
                <li className="divider"></li>
                <li><a className="black-text" onClick={this.signInWithGoogle}>Sign up with Google</a></li>
            </ul>);
            
        }else if (this.state.currentUserBool === "signIn"){
            
            return (<ul id="signInDropdown" className="dropdown-content">
                <li>
                    <a className="black-text" style={{width:"300px"}}>
                        <p >Sign in with email</p>
                        <div className="input-field">
                            <input id="email" type="text" tabindex="2" />
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input id="password1" type="password" tabindex="3"/>
                            <label for="password1">Password</label>
                        </div>
                        <br/>
                        <div class="btn black right" onClick={this.signInWithEmail}>Sign In</div>
                        <div class="btn-flat right" tabindex="5" onClick={()=>{
                            this.setState({currentUserBool:false});
                        }}>Sign up</div>
                        <br />
                    </a>
                </li>
                <li className="divider"></li>
                <li><a className="black-text" onClick={this.signInWithGoogle}>Sign in with Google</a></li>
            </ul>);
            
        }
        else {
            
            return (<ul id="signInDropdown" className="dropdown-content">
                <li className = "black-text"
                onClick = {function() {
                    firebase.auth().signOut();
                    M.Dropdown.getInstance(document.getElementById("signInDropdownTrigger")).close();
                }} ><a>Sign Out</a>
                
                </li>
            </ul>);
            
        }
    }
    
    //Sign in functions
    signUpWithEmail() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password1").value;
        const password2 = document.getElementById("password2").value;
        if(password === password2) {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                M.toast({html: `Error: ${error.code}<br/>${error.message}`});
            });
            M.Dropdown.getInstance(document.getElementById("signInDropdownTrigger")).close();
        }else{
            M.toast({html: 'Passwords must match'});
        }
    }
    
    signInWithEmail(){
        const email = document.getElementById("email").value;
        const password = document.getElementById("password1").value;
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            M.toast({html: `Error: ${error.code}<br/>${error.message}`});
        });
        M.Dropdown.getInstance(document.getElementById("signInDropdownTrigger")).close();
    }
    
    signInWithGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).catch(function(error) {
            let toast = M.toast({html:`Error: ${error.code}<br/>${error.message}`});
            toast.displayLength = 1000000;
        });
        M.Dropdown.getInstance(document.getElementById("signInDropdownTrigger")).close();
    }
}
export default Signin;
