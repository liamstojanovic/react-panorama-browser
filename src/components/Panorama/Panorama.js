import React from 'react';

function Panorama(props) {
    
    const script = (
        `
        <iframe allowfullscreen id="iframePannellum" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=${props.input.panorama}&autoLoad=true"></iframe>
        `
    )

    return (
        <div class="panorama" dangerouslySetInnerHTML={{__html: script}} />
     );
}

export default Panorama;