import React, {useState, useEffect} from 'react';
import axios from 'axios';

const RelatedVideos = (props) => {
    
    const [relatedVids, setRelatedVideos] = useState([])

    let relatedVideo = "https://www.googleapis.com/youtube/v3/search?relatedToVideoId=" + "M7lc1UVf-VE" + "&type=video&key=AIzaSyBQVFM2XjDbQQtS3T0MdPfoGmgcztrBD50"
    
    useEffect(() => {
        fetchRelatedVideos();
    }, []); 

    const fetchRelatedVideos = async () => {
        let response = await axios.get(relatedVideo)
        console.log("Youtube related response: ",response.data)
        setRelatedVideos(response.data)

    // const handleClick = (selectedVideoId) => {
    //     console.log(selectedVideoID)

    // }
    };
    

     return (
        <div>
            {relatedVids.map((element) => {
                return (
                    <img scr = {element.snippet.thumbnails.default.url} onClick={()=>handleClick(element.videoID)} />
                )
            })}
        </div>
     );
}
 
export default RelatedVideos;