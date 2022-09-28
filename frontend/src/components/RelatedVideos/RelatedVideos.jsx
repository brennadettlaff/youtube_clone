import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RelatedVideos = (props) => {
    
    const [relatedVids, setRelatedVideos] = useState([])

    let relatedVideo = "https://www.googleapis.com/youtube/v3/search?relatedToVideoId=" + props.testVideo + "&type=video&key=AIzaSyCkOwnACYtTMTuv-AY50DGVDGkVXZHg4TE"
    
    useEffect(() => {
        fetchRelatedVideos();
    }, []); 

    const fetchRelatedVideos = async () => {
        let response = await axios.get(relatedVideo)
        console.log("Youtube related response: ",response.data.items)
        setRelatedVideos(response.data.items)

    // const handleClick = (selectedVideoId) => {
    //     console.log(selectedVideoID)

    // }
    };
    

     return (
        <div>
            {relatedVids.map((element) => {
                {console.log(element.id.videoId)}
                return (
                <>
                    <iframe id="ytplayer" 
                    type="text/html" 
                    width="640" 
                    height="360"
                    src={"https://www.youtube.com/embed/" + element.id.videoId + "?autoplay=1&origin=http://example.com"}
                    frameBorder="0"></iframe> 
                </>
                )    
            })}
        </div>
     );
}
 
export default RelatedVideos;