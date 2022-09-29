import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RelatedVideos.css'

const RelatedVideos = (props) => {
    
    let navigate = useNavigate();

    const [relatedVids, setRelatedVideos] = useState([])

    let relatedVideo = "https://www.googleapis.com/youtube/v3/search?relatedToVideoId=" + props.testVideo + "&type=video&key=AIzaSyCkOwnACYtTMTuv-AY50DGVDGkVXZHg4TE&part=snippet"
    
    useEffect(() => {
        fetchRelatedVideos();
    }, [props.data]); 

    const fetchRelatedVideos = async () => {
        let response = await axios.get(relatedVideo)
        console.log("Youtube related response: ",response.data)
        setRelatedVideos(response.data.items)

    };
    
    return (
        <div className='thumbnail-gallery'>
            {relatedVids.map((element) => {
                {console.log(element.id.videoId)}
                return (
                    <>
                    <img src = {element.snippet.thumbnails.default.url} onClick={() => navigate(`/videopage/${element.id.videoId}`)}/>
                    <h4>{element.snippet.title}</h4>
                    <h3>{element.id.videoId}</h3>
                    </>
                )    
            })}
        </div>
    );
}
 
export default RelatedVideos;