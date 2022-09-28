import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Comment from '../../components/Comment/Comment';
import './VideoPage';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos'


const VideoPage = () => {
    console.log(useParams());
    
    return ( 
        <div>
        <VideoPlayer testVideo={useParams().videoId} />
        <Comment />
        <RelatedVideos testVideo={useParams().videoId}/>
        </div>
     );
}
 
export default VideoPage;