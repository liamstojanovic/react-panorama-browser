import React, { useState } from 'react';

//This should render the panorama based on the input
function Panorama(props) {
    return ( 
        <div>
            Hello from the Panorama component!
            JSON: {JSON.stringify(props.input)}
        </div>
     );
}

export default Panorama;