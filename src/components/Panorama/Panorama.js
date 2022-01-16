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
    function createScript() {
        return (
            `
            <script>
                pannellum.viewer('panorama', {
                    "type": "equirectangular",
                    "panorama": "https://pannellum.org/images/alma.jpg"
            });
            </script>
            `
        )
    }
    
    const script = (
        `
        <iframe width="500" height="500" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=${props.input.panorama}"></iframe>
        `
    )

    return ( 
        <div className="panorama">
            <div dangerouslySetInnerHTML={{__html: script}} />
        </div>
     );
}

export default Panorama;