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
        <div className="viewer">
            Hello from the Panorama component!
            Displaying ${props.input.title}
            <div className="panorama"></div><script>{`
                pannellum.viewer('panorama', {
                    "type": "equirectangular",
                    "panorama": ${props.input.panorama}
                })
            `}
            </script>
            
        </div>
     );
}

export default Panorama;