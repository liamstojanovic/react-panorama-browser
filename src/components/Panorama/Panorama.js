import React, { useState } from 'react';

//This should render the panorama based on the input
// function pannellumEmbed(props) {
//     return (
//         <div>
//             <script>{`
//                 pannellum.viewer('panorama', {
//                     "type": "equirectangular",
//                     "panorama": ${props.input.panorama}
//                 })
//             `}
//             </script>
//         </div>
//     )
// }

function Panorama(props) {
    
    return ( 
        <div className="panorama">
            Hello from the Panorama componet! Displaying {props.input.title}
        </div>
     );
}

export default Panorama;