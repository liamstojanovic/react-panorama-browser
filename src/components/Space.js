import React, { Component } from 'react'

export class Space extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pannellumJson : [
                {
                    title: "Parking lot and Building",
                    basePath: 'assets/img/IMG1539.jpg',
                    autoLoad: true, 
                    orientationOnByDefault: true,
                },
                {
                    title: "Lobby",
                },
                {
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
