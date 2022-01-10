import React, { useState } from 'react';


function DirectNavigation(props) {
    // This needs an if statement to add a hover effect to the button if the spaceId matches the current index
    const buttons = props.input.map((space, index) => {
        return (
            <div key={index}>
                <button key={space.slug}>{space.title}</button>
            </div>
            
        )
        })
    
    return ( 
        <div className="direct-navigation">
            {buttons}
        </div>
     );
}

export default DirectNavigation;