import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import './VideoPage';


const VideoPage = () => {
    console.log(useParams());
    
    return ( 
        <div>
        <VideoPlayer testVideo={useParams().videoId} />
        </div>
     );
}
 
export default VideoPage;