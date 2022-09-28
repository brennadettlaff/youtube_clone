import React from 'react';
import './VideoPlayer'

const VideoPlayer = (props) => {
    return ( 
        <>
        <iframe id="ytplayer" 
        type="text/html" 
        width="640" 
        height="360"
        src={"https://www.youtube.com/embed/" + props.testVideo + "?autoplay=1&origin=http://example.com"}
        frameBorder="0"></iframe>
        </>
     );
}
 
export default VideoPlayer;