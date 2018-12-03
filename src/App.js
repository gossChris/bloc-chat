import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';

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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Bloc Chat</h1>
          <RoomList
          firebase={firebase}
          />
        </header>
      </div>
    );
  }
}

export default App;
