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
        this.setSpaceId = this.setSpaceId.bind(this)
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
    setSpaceId(num) {
        this.setState({ spaceId: num })
    }
    

    render() { 
        const directNavigation =  (
            <div className="directNavigation w-layout-grid room-grid">
                <button onClick={() => this.setState({ spaceId: 0 })} className="room-selector-button"><div className="room-select-text">Parking lot and building</div></button>
                <button onClick={() => this.setState({ spaceId: 1 })} className="room-selector-button"><div className="room-select-text">Lobby</div></button>
                <button onClick={() => this.setState({ spaceId: 2 })} className="room-selector-button"><div className="room-select-text">Patient rooms</div></button>
            </div>
            )
        
        if (this.state.spaceId >= 2) {
            return (
            <div className="office-tour-section">
                <div className="tour-nav-buttons">
                    <button onClick={this.decrementSpaceId} className="back-room-button w-inline-block">Previous space</button>
                    <button disabled onClick={this.incrementSpaceId} className="forward-room-button w-inline-block">Next space</button>
                </div>
                <div className="panorama">
                    <Space currentSpace = {this.state.spaceId} />
                </div>
                {directNavigation}
            </div>
            )
        }
        if (this.state.spaceId <= 0) {
            return (
            <div className="office-tour-section">
                <div className="tour-nav-buttons">
                    <button disabled onClick={this.decrementSpaceId} className="back-room-button w-inline-block">Previous space</button>
                    <button onClick={this.incrementSpaceId} className="forward-room-button w-inline-block">Next space</button>
                </div>
                <div className="panorama">
                    <Space currentSpace = {this.state.spaceId} />
                </div>
                {directNavigation}
            </div>
            )
        } else {
            return (
            <div className="office-tour-section">
                <div className="tour-nav-buttons">
                    <button onClick={this.decrementSpaceId} className="back-room-button w-inline-block">Previous space</button>
                    <button onClick={this.incrementSpaceId} className="forward-room-button w-inline-block">Next space</button>
                </div>
                <div className="panorama">
                    <Space currentSpace = {this.state.spaceId} />
                </div>
                {directNavigation}
            </div>
            )
        }
    }
}

export default SpaceNavigation
