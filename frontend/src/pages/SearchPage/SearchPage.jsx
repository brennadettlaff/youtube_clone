import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './SearchPage'


const SearchPage = (props) => {
  
  let navigate = useNavigate();

  const [searchedVids, setSearchedVids] = useState([])

  let searchURL = "https://www.googleapis.com/youtube/v3/search?q=" + props.data + "&key=AIzaSyCkOwnACYtTMTuv-AY50DGVDGkVXZHg4TE&part=snippet"

  useEffect(() => {
    fetchSearchedVideos();
  }, [props.data]);

  const fetchSearchedVideos = async () => {
    let response = await axios.get(searchURL)
    console.log("Youtube search response: ",response.data)
    setSearchedVids(response.data.items)
  };


  return (
    <div>
      {searchedVids.map((element) => {
        return (
          <div>
            <img src = {element.snippet.thumbnails.default.url} onClick={() => navigate(`/videopage/${element.id.videoId}`)}/>
            <h4>{element.snippet.title}</h4>
            <h3>{element.id.videoId}</h3>
          </div>
        )
      })}

    </div>
  );
}

export default SearchPage;