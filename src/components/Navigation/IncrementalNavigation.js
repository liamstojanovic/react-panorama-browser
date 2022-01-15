import React, { useState, useEffect } from 'react';

function IncrementalNavigation(props) {

    var previousButton = `
    <button className="decrement" onClick={() => setSpaceId(spaceId - 1)}>`
    
    return ( 
        <div className="incremental-navigation">
            <button className="decrement">Previous</button>
            <button className="increment">Next</button>
        </div>
     );
}

export default IncrementalNavigation;