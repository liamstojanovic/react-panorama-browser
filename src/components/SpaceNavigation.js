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
    setSpaceId (num) {
        this.setState({ spaceId: num })
    }
    

    render() { 
        const directNavigation =  (
            <div className="directNavigation">
                <button>Parking lot and building</button>
                <button>Lobby</button>
                <button>Patient rooms</button>
            </div>
            )
        
        if (this.state.spaceId >= 2) {
            return (
            <div>
                <button onClick={this.decrementSpaceId}>Previous space</button>
                <button disabled onClick={this.incrementSpaceId}>Next space</button>
                <div className="panorama">
                    <Space currentSpace = {this.state.spaceId} />
                </div>
                {directNavigation}
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
                {directNavigation}
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
                {directNavigation}
            </div>
            )
        }
    }
}

export default SpaceNavigation
