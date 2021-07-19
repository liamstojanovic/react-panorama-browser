import React, { Component } from 'react'
import pannellum from 'pannellum'

// I think props need to be passed down from App.js to here
// PannellumJson needs to be rewritten to abide to pannellum syntax
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
            // pannelumObj : pannellum.viewer('panorama')
        }
        

    }

    // componentDidMount () {
    //     const script = document.createElement("script")
    //     script.src = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js"
    //     script.async = true
    //     document.body.appendChild(script)
    // }
    componentDidMount () {
        window.pannellum.viewer('panorama', {
            "type": "equirectangular",
            "panorama": "assets/img/IMG1539.jpg"
        })
    }

    render() {
        // let viewer = pannellum.viewer('panorama')
        // let renderedObj = pannellum.viewer('panorama', {
        //     "panorama": "assets/img/IMG1539.jpg",
        //     "autoload": true
        // })
        return (
            <div id="panorama"></div>
        )
    }
}

export default Space
