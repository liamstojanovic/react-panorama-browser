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
                    title: "Parking lot and Building",
                    panorama: 'https://f002.backblazeb2.com/file/cw3-public/walker/img/IMG_1539.jpg',
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
        window.pannellum.viewer('panorama', this.state.pannellumJson[0])
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
