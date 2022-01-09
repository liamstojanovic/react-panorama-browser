import React, { useState } from 'react';


function Panorama(props) {
    return ( 
        <div>
            Hello from the Panorama component!
            JSON: {JSON.stringify(props.input)}
        </div>
     );
}

export default Panorama;