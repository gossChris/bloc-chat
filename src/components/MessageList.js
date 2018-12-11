import React, { Component } from 'react';


class MessageList extends Component {

  constructor(props) {
    super(props)

    this.messagesRef = this.props.firebase.database().ref('messages');

    this.state={
      messages:[]
    };
  }

  componentDidMount() {
    this.messagesRef.on('child_added', snapshot => {
      const message = snapshot.val();
      message.key = snapshot.key;
      this.setState({messages: this.state.messages.concat ( message ) })
    });
  }

<<<<<<< HEAD
=======

>>>>>>> checkpoint-list-messags
  handleSubmit(e) {
    //console.log(this.input.value
    const newMessageName = this.input.value
    this.messagesRef.push({
      name: newMessageName
    });
    e.preventDefault();
    this.input.value="";
  }



  render() {
    return (
      <div>
<<<<<<< HEAD
        <aside>
            <ul className="message-list">
            {
              this.state.messages.map((message, activeRoom) =>
                <li>{message.content}</li>
              )
            }
            </ul>
        </aside>
=======
            <section className="message-list">
            {
              this.state.messages.filter( (message) => this.props.activeRoom && message.roomId === this.props.activeRoom.key).map((message, activeRoom) =>
                <p>{"Meesage: " + message.content + " " + "Username: " + message.username}</p>

              )
            }
            </section>
>>>>>>> checkpoint-list-messags
      </div>
    );
  }
}

export default MessageList;
