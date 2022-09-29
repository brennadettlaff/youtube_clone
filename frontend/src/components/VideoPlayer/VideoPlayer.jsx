import React from 'react';
import './VideoPlayer';
import './VideoPlayer.css';

const VideoPlayer = (props) => {
    return ( 
        <>
        <div className='video-player-container'>
        <iframe id="ytplayer" 
        type="text/html" 
        width="640" 
        height="360"
        src={"https://www.youtube.com/embed/" + props.testVideo + "?autoplay=1&origin=http://example.com"}
        frameBorder="0"></iframe>
        </div>
        </>
     );
}
 
export default VideoPlayer;