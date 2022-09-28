import React from 'react';
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import './VideoPage';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos'


const VideoPage = () => {
    return ( 
        <div>

        <VideoPlayer testVideo={'M7lc1UVf-VE'} />
        <RelatedVideos testVideo={'M7lc1UVf-VE'}/>
        </div>
     );
}
 
export default VideoPage;