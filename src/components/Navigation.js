import React, { useState } from 'react';
import Panorama from './Panorama/Panorama';

function Navigation(props) {
    // State
    const [spaceId, setSpaceId] = useState(0);
    const input = props.input

    // Button rendering
    const directNavigationButtons = props.input.map((space, index) => {
        return (
            <div key={index}>
                <button key={space.slug} onClick={() => setSpaceId(index)}>{space.title}</button>
            </div>
        )
    });
    // Increment / Decrement Button state changes
    function decrementSpaceId() {
        if (spaceId > 0) {
            return spaceId - 1
        }
        return spaceId;
    }

    function incrementSpaceId() {
        if (spaceId < input.length - 1) {
            return spaceId + 1
        }
        return spaceId
    }


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
        <div className="incremental-navigation">
            <button className="decrement" onClick={() => setSpaceId(decrementSpaceId())}>Previous</button>
            <button className="increment" onClick={() => setSpaceId(incrementSpaceId())}>Next</button>
        </div>
    </React.Fragment>

     );
}

export default Navigation;