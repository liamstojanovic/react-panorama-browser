import React, { useState, useEffect } from 'react';

function IncrementalNavigation(props) {
    return ( 
        <div className="incremental-navigation">
            <button className="decrement">Previous</button>
            <button className="increment">Next</button>
        </div>
     );
}

export default IncrementalNavigation;