import React, { Component } from 'react';

class User extends Component {



  componentDidMount() {
    this.props.firebase.auth().onAuthStateChanged( user => {
      console.log(user)
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
        {this.props.user ? this.props.user.displayName : "Guest"}
          <button
            className="btn-signIn"
            type="submit"
            onClick={this.signInHandler.bind(this)}>Sign in
          </button>
          <button
            className="btn-signOut"
            type="submit"
            onClick={this.signOutHandler.bind(this)}>Sign Out
          </button>
        </section>
      </div>
    );
  }
}

export default User;
