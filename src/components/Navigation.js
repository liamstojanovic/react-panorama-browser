import React, { useState } from 'react';
import Panorama from './Panorama/Panorama';

function Navigation(props) {
    // State
    const [spaceId, setSpaceId] = useState(0);
    const input = props.input

    // Button rendering
    const directNavigationButtons = props.input.map((space, index) => {
        if (index === spaceId) {
            return (
                <div key={index}>
                    <button key={space.slug} disabled>{space.title}</button>
                </div>
            )
        }
        
        return (
            <div key={index}>
                <button key={space.slug} onClick={() => setSpaceId(index)}>{space.title}</button>
            </div>
        )
    });
    function incrementalNavigationButtons(spaceId) {
        if (spaceId === 0) {
            return (
                <div className="incremental-navigation">
                    <button className="decrement" disabled>Previous</button>
                    <button className="increment" onClick={() => setSpaceId(incrementSpaceId())}>Next</button>
                </div>
            )
        }
        if (spaceId === props.input.length - 1) {
            return (
                <div className="incremental-navigation">
                    <button className="decrement" onClick={() => setSpaceId(decrementSpaceId())}>Previous</button>
                    <button className="increment" disabled>Next</button>
                </div>
            )
        }
        return (
            <div className="incremental-navigation">
                <button className="decrement" onClick={() => setSpaceId(decrementSpaceId())}>Previous</button>
                <button className="increment" onClick={() => setSpaceId(incrementSpaceId())}>Next</button>
            </div>
        )
    }
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
        <div className="top-div">
          <div className="title">
              <h2>{input[spaceId].title}</h2>
          </div>
          <div className="direct-navigation">
              {directNavigationButtons}
          </div>
        </div>
        <div className="viewer">
            <Panorama input={input[spaceId]}/>
        </div>
        {incrementalNavigationButtons(spaceId)}
    </React.Fragment>

     );
}

export default Navigation;