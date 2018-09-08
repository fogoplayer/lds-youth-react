/* global firebase */
import React from "react";

class page extends React.Component {// eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    const currentUser = firebase.auth().currentUser;
    return (
      <div>
        <h2>Settings</h2>
        <h4>Update Personal Information</h4>
        <p>Name: <input id="name" type="text" defaultValue={currentUser.displayName} /></p>
        <p>Email: <input id="email" type="text" defaultValue={currentUser.email} /></p>
        <h4>Update Password</h4>
        <p>Old Password: <input id="oldpass" type="password" /></p>
        <p>New Password: <input type="password" /></p>
        <p>Reenter New Password: <input id="password1" type="password" /></p>
        
      </div>
    );
  }
}

export default page;
