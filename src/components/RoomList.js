import React, { Component } from 'react';


class RoomList extends Component {

  constructor(props) {
    super(props)

    this.roomsRef = this.props.firebase.database().ref('rooms');

    this.state={
      rooms:[]
    };
  }

  componentDidMount() {
    this.roomsRef.on('child_added', snapshot => {
      const room = snapshot.val();
      room.key = snapshot.key;
      this.setState({rooms: this.state.rooms.concat ( room ) })
    });
  }

  handleSubmit(e) {
    //console.log(this.input.value
    const newRoomName = this.input.value
    this.roomsRef.push({
      name: newRoomName
    });
    e.preventDefault();
    this.input.value="";
  }



  render() {
    return (
      <div>
        <aside>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>
              New Room Name:
              <input type="text" ref={(input) => this.input = input} />
            </label>
            <input type="submit"  value="Create Room" />
          </form>
            <ul className="roomList">
            {
              this.state.rooms.map((room, index) =>
                <li key={index} onClick={() => this.props.setActiveRoom(room)}>{room.name}</li>
              )
            }
            </ul>
        </aside>
      </div>
    );
  }
}

export default RoomList;
