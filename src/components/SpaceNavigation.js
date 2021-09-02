import React, { Component } from 'react'
import Space from './Space'
import ArrowBack from './img/arrow_back_disabled.png'
import ArrowForward from './img/arrow_forward_enabled.png'

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
            <div className="button-parent-div">
                <button onClick={() => this.setState({ spaceId: 0 })} className="room-selector-button"><div className="room-select-text">Parking lot</div></button>
                <button onClick={() => this.setState({ spaceId: 1 })} className="room-selector-button"><div className="room-select-text">Lobby</div></button>
                <button onClick={() => this.setState({ spaceId: 2 })} className="room-selector-button"><div className="room-select-text">Patient rooms</div></button>
            </div>
            )
        
        if (this.state.spaceId >= 2) {
            return (
                <div className="space-tour-section">
                <div className="top-div">
                    <div className="button-parent-div">
                        {directNavigation}
                    </div>
                </div>
                <div className="panorama pano-div">
                    <Space currentSpace = {this.state.spaceId} />
                </div>
                <div className="bottom-div">
                    <button onClick={this.decrementSpaceId} className="room-direction-button"><div className="room-backforward-text">Previous space</div><div class="arrow-div"><img src={ArrowBack} class="arrow-image" alt="Go back"></img></div></button>
                    <button disabled onClick={this.incrementSpaceId} className="room-direction-button"><div className="room-backforward-text">Next space</div><div class="arrow-div"><img src={ArrowForward} class="arrow-image" alt="Go back"></img></div></button>
                </div>
            </div>
            )
        }
        if (this.state.spaceId <= 0) {
            return (
            <div className="space-tour-section">
                <div className="top-div">
                    <div className="button-parent-div">
                        {directNavigation}
                    </div>
                </div>
                <div className="panorama pano-div">
                    <Space currentSpace = {this.state.spaceId} />
                </div>
                <div className="bottom-div">
                    <button disabled onClick={this.decrementSpaceId} className="room-direction-button"><div className="room-backforward-text">Previous space</div><div class="arrow-div"><img src={ArrowBack} class="arrow-image" alt="Go back"></img></div></button>
                    <button onClick={this.incrementSpaceId} className="room-direction-button"><div className="room-backforward-text">Next space</div><div class="arrow-div"><img src={ArrowForward} class="arrow-image" alt="Go back"></img></div></button>
                </div>
            </div>
            )
        } else {
            return (
                <div className="space-tour-section">
                <div className="top-div">
                    <div className="button-parent-div">
                        {directNavigation}
                    </div>
                </div>
                <div className="panorama pano-div">
                    <Space currentSpace = {this.state.spaceId} />
                </div>
                <div className="bottom-div">
                    <button onClick={this.decrementSpaceId} className="room-direction-button"><div className="room-backforward-text">Previous space</div><div class="arrow-div"><img src={ArrowBack} class="arrow-image" alt="Go back"></img></div></button>
                    <button onClick={this.incrementSpaceId} className="room-direction-button"><div className="room-backforward-text">Next space</div><div class="arrow-div"><img src={ArrowForward} class="arrow-image" alt="Go back"></img></div></button>
                </div>
            </div>
            )
        }
    }
}

export default SpaceNavigation
