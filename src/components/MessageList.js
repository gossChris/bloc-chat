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


  handleSubmit(e) {
    //console.log(this.input.value
    const newMessageName = this.input.value
    this.messagesRef.push({
      content: newMessageName,
      sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
      username: this.props.user ? this.props.user.displayName : "Guest",
      roomId: this.props.activeRoom ? this.props.activeRoom.key : " "
    });
    e.preventDefault();
    this.input.value="";
  }

  formatTime(ms) {
    const date = new Date(ms);
    return date.toUTCString()
}
  render() {
    return (
      <div>
            <section className="message-list">
            {
              this.state.messages.filter( (message) => this.props.activeRoom && message.roomId === this.props.activeRoom.key).map((message, index) =>
                <p key={index}>{"Meesage: " + message.content + " Username: " + message.username + " Sent at: " + this.formatTime (message.sentAt) }</p>
              )
            }
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label>
                Enter Message:
                <input type="text" ref={(input) => this.input = input} />
              </label>
              <button
              className="send-Message"
              type="submit"
              onClick={this.handleSubmit.bind(this)}>SEND
            </button>
            </form>
            </section>
      </div>
    );
  }
}

export default MessageList;
