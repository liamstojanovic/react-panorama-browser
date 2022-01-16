import React, {useEffect} from 'react';

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
    
    const script = (
        `
        <iframe allowfullscreen src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=${props.input.panorama}"></iframe>
        `
    )

    return (
        <div className="panorama" dangerouslySetInnerHTML={{__html: script}} />
     );
}

export default Panorama;