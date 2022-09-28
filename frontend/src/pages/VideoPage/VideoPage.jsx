import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Comment from '../../components/Comment/Comment';
import './VideoPage';


const VideoPage = () => {
    console.log(useParams());
    
    return ( 
        <div>
        <VideoPlayer testVideo={useParams().videoId} />
        <Comment />
        </div>
     );
}
 
export default VideoPage;