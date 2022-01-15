import React, { Component, useState } from 'react';
import Panorama from './Panorama/Panorama';

function Navigation(props) {

    const [spaceId, setSpaceId] = useState(0);
    const input = props.input
    const directNavigationButtons = props.input.map((space, index) => {
        return (
            <div key={index}>
                <button key={space.slug}>{space.title}</button>
            </div>
            
        )
    });
    return (
    <React.Fragment>
        <div className="title">
            <h1>{input[spaceId].title}</h1>
        </div>
        <div className="direct-navigation">
            {directNavigationButtons}
        </div>
        <div className="viewer">
            <Panorama input={input[spaceId]}/>
        </div>
    </React.Fragment>

     );
}

export default Navigation;