import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RelatedVideos.css'

const RelatedVideos = (props) => {
    
    let navigate = useNavigate();

    const [relatedVids, setRelatedVideos] = useState([])

    let relatedVideo = "https://www.googleapis.com/youtube/v3/search?relatedToVideoId=" + props.testVideo + "&type=video&key=AIzaSyBQVFM2XjDbQQtS3T0MdPfoGmgcztrBD50&part=snippet"
    
    useEffect(() => {
        fetchRelatedVideos();
    }, [props.data]); 

    const fetchRelatedVideos = async () => {
        let response = await axios.get(relatedVideo)
        setRelatedVideos(response.data.items)

    };
    
    return (
        <div className='thumbnail-gallery'>
            {relatedVids.map((element) => {
                return (
                    <>
                    <div className='thumbnail-box'>
                        <img className='thumbnail-img' src = {element.snippet.thumbnails.medium.url} onClick={() => navigate(`/videopage/${element.id.videoId}`)}/>
                        <h4 className='title'>{element.snippet.title}</h4>
                        {/* <h3>{element.id.videoId}</h3> */}
                    </div>
                    </>
                )    
            })}
        </div>
    );
}
 
export default RelatedVideos;