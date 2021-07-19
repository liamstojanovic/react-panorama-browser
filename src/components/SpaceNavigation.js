import React, { Component } from 'react'
import Space from './Space'

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
    render() { // Likely need to rewrite this logic // Button state needs following: button hasBeenClicked, button focused, button isDisabled
        if (this.state.spaceId >= 2) {
            return (
            <div>
                <button onClick={this.decrementSpaceId}>Previous space</button>
                <button disabled onClick={this.incrementSpaceId}>Next space</button>
                <div className="panorama">
                    <Space currentSpace = {this.state.spaceId} />
                </div>
                <div className="directNavigation">
                    <button>Parking lot and building</button>
                    <button>Lobby</button>
                    <button>Patient rooms</button>
                </div>
            </div>
            )
        }
        if (this.state.spaceId <= 0) {
            return (
            <div>
                <button disabled onClick={this.decrementSpaceId}>Previous space</button>
                <button onClick={this.incrementSpaceId}>Next space</button>
                <div className="panorama">
                    <Space currentSpace = {this.state.spaceId} />
                </div>
                <div className="directNavigation">
                    <button>Parking lot and building</button>
                    <button>Lobby</button>
                    <button>Patient rooms</button>
                </div>
            </div>
            )
        } else {
            return (
            <div>
                <button onClick={this.decrementSpaceId}>Previous space</button>
                <button onClick={this.incrementSpaceId}>Next space</button>
                <div className="panorama">
                    <Space currentSpace = {this.state.spaceId} />
                </div>
                <div className="directNavigation">
                    <button>Parking lot and building</button>
                    <button>Lobby</button>
                    <button>Patient rooms</button>
                </div>
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
