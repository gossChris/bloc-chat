import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';

var config = {
  apiKey: "AIzaSyCf6PC_ibv-p7_t5i-ZtptRvDlz80WWxwc",
  authDomain: "bloc-chat-b428c.firebaseapp.com",
  databaseURL: "https://bloc-chat-b428c.firebaseio.com",
  projectId: "bloc-chat-b428c",
  storageBucket: "bloc-chat-b428c.appspot.com",
  messagingSenderId: "866919733393"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeRoom: null,
      user: null
    };
  }

  setActiveRoom(room) {
    this.setState({activeRoom:room})
    console.log(room)
  }

  setUser(user) {
    console.log(user)
    this.setState({
      user: user
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Bloc Chat</h1>
          <RoomList
          firebase={firebase}
          setActiveRoom={(room) => this.setActiveRoom(room)}
          />
          <MessageList
          firebase={firebase}
          activeRoom={this.state.activeRoom}
          user={this.state.user}
          />
          <User
          firebase={firebase}
          setUser={(user) => this.setUser(user)}
          user={this.state.user}
          />
        </header>
      </div>
    );
  }
}

export default App;
