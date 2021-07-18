import React, { Component } from 'react'

export class SpaceNavigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roomId: 0
        }
        this.incrementRoomId = this.incrementRoomId.bind(this)
        this.decrementRoomId = this.decrementRoomId.bind(this)
    }
    incrementRoomId () {
        this.setState(state => ({
            roomId: state.roomId + 1
        }))
    }
    decrementRoomId () {
        this.setState(state => ({
            roomId: state.roomId - 1
        }))
    }
    render() {
        if (this.state.roomId >= 2) {
            return (
            <div>
                <button onClick={this.decrementRoomId}>Previous room</button>
                <button disabled onClick={this.incrementRoomId}>Next room</button>
                <h1>Current room ID: {this.state.roomId}</h1>
            </div>
            )
        }
        if (this.state.roomId <= 0) {
            return (
            <div>
                <button disabled onClick={this.decrementRoomId}>Previous room</button>
                <button onClick={this.incrementRoomId}>Next room</button>
                <h1>Current room ID: {this.state.roomId}</h1>
            </div>
            )
        } else {
            return (
            <div>
                <button onClick={this.decrementRoomId}>Previous room</button>
                <button onClick={this.incrementRoomId}>Next room</button>
                <h1>Current room ID: {this.state.roomId}</h1>
            </div>
            )
        }
    }
}

export default SpaceNavigation




// import React, { useState } from 'react'

// const RoomNavigation = () => {
    
//     const [roomId, setRoomId] = useState(0)

//     return (
//         <div>
//             <button onClick={() => setRoomId(roomId - 1)}>Previous room</button>
//             <button onClick={() => setRoomId(roomId + 1)}>Next room</button>
//             <p>Room id: {roomId}</p>
//         </div>
//     )
// }

// export default RoomNavigation
