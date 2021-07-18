import React, { Component } from 'react'

export class Space extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pannellumJson : [
                {
                    spaceId: 0,
                    title: "Parking lot and Building",
                    basePath: 'assets/img/IMG1539.jpg',
                    autoLoad: true, 
                    orientationOnByDefault: true,
                },
                {
                    spaceId: 1,
                    title: "Lobby",
                },
                {
                    spaceId: 2,
                    title: "Patient Rooms",
                }
            ]
        }

    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Space
