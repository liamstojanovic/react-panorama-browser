import React from 'react';

function Panorama(props) {
    
    const script = (
        `
        <iframe allowfullscreen src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=${props.input.panorama}"></iframe>
        `
    )

    return (
        <div id="panorama" dangerouslySetInnerHTML={{__html: script}} />
     );
}

export default Panorama;