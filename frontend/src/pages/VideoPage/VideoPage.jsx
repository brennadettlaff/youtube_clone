import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Comment from '../../components/Comment/Comment';
import './VideoPage';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos'
import './VideoPage.css';


const VideoPage = () => {
    console.log(useParams());
    
    return ( 
        <div className='video-gallery-container'>
            <div className='video-gallery'>
                <div className='featured-video'>
                    <VideoPlayer testVideo={useParams().videoId} />
                    <Comment />
                    
                </div>   
                <div className='all-videos'>
                    <div className='video'>
                        <RelatedVideos testVideo={useParams().videoId}/>
                    </div>    
                </div> 
            </div>
        </div>
     );
}
 
export default VideoPage;