import React, {useState, useEffect} from 'react';
import axios from "axios";
import './SearchPage'


const SearchPage = (props) => {
  
  const [searchedVids, setSearchedVids] = useState([])
  
  let searchURL = "https://www.googleapis.com/youtube/v3/search?q=" + props.data + "&key=AIzaSyBQVFM2XjDbQQtS3T0MdPfoGmgcztrBD50&part=snippet"

  useEffect(() => {
    fetchSearchedVideos();
  }, []);

  const fetchSearchedVideos = async () => {
    let response = await axios.get(searchURL)
    debugger
    console.log("Youtube search response: ",response.data)
    setSearchedVids(response.data.items)
  };




  return (
    <div>
      {searchedVids.map((element) => {
        return (
          <img src = {element.snippet.thumbnails.default.url} />
        )
      })}
{/*       
      {console.log(props.data)}
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={"https://www.youtube.com/embed/" + props.data + "?autoplay=1&origin=http://example.com"}
        frameborder="0"
      ></iframe> */}
    </div>
  );
}

export default SearchPage;