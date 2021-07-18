import React, { Component } from 'react'

export class SpaceNavigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            spaceId: 0
        }
        this.incrementSpaceId = this.incrementSpaceId.bind(this)
        this.decrementSpaceId = this.decrementSpaceId.bind(this)
    }
    incrementSpaceId () {
        this.setState(state => ({
            spaceId: state.spaceId + 1
        }))
    }
    decrementSpaceId () {
        this.setState(state => ({
            spaceId: state.spaceId - 1
        }))
    }
    render() {
        if (this.state.spaceId >= 2) {
            return (
            <div>
                <button onClick={this.decrementSpaceId}>Previous space</button>
                <button disabled onClick={this.incrementSpaceId}>Next space</button>
                <h1>Current space ID: {this.state.spaceId}</h1>
            </div>
            )
        }
        if (this.state.spaceId <= 0) {
            return (
            <div>
                <button disabled onClick={this.decrementSpaceId}>Previous space</button>
                <button onClick={this.incrementSpaceId}>Next space</button>
                <h1>Current space ID: {this.state.spaceId}</h1>
            </div>
            )
        } else {
            return (
            <div>
                <button onClick={this.decrementSpaceId}>Previous space</button>
                <button onClick={this.incrementSpaceId}>Next space</button>
                <h1>Current space ID: {this.state.spaceId}</h1>
            </div>
            )
        }
    }
}

export default SpaceNavigation




// import React, { useState } from 'react'

// const RoomNavigation = () => {
    
//     const [spaceId, setRoomId] = useState(0)

//     return (
//         <div>
//             <button onClick={() => setRoomId(spaceId - 1)}>Previous room</button>
//             <button onClick={() => setRoomId(spaceId + 1)}>Next room</button>
//             <p>Room id: {spaceId}</p>
//         </div>
//     )
// }

// export default RoomNavigation
