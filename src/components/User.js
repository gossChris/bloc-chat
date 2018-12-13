import React, { Component } from 'react';

class User extends Component {



  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user)
    });
  }

  signInHandler() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup ( provider );
  }

  signOutHandler() {
    this.props.firebase.auth().signOut();
  }

  render() {
    return(
      <div>
        <section>
          <button
            className="btn-signIn"
            type="submit"
            onClick={this.signInHandler()}>Sign in
          </button>
          <button
            className="btn-signOut"
            type="submit"
            onClick={this.signOutHandler()}>Sign Out
          </button>
        </section>
      </div>
    );
  }
}

export default User;
