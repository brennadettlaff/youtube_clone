import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './SearchPage';
import './SearchPage.css';

const SearchPage = (props) => {
  
  let navigate = useNavigate();

  const [searchedVids, setSearchedVids] = useState([])

  let searchURL = "https://www.googleapis.com/youtube/v3/search?q=" + props.data + "&key=AIzaSyBQVFM2XjDbQQtS3T0MdPfoGmgcztrBD50&part=snippet"

  useEffect(() => {
    fetchSearchedVideos();
  }, [props.data]);

  const fetchSearchedVideos = async () => {
    let response = await axios.get(searchURL)
    console.log("Youtube search response: ",response.data)
    setSearchedVids(response.data.items)
  };


  return (
    <div className='search-container'>
      {searchedVids.map((element) => {
        return (
          <div className='search-thumbnails'>
            <img className='size-thumbnails' src = {element.snippet.thumbnails.medium.url} onClick={() => navigate(`/videopage/${element.id.videoId}`)}/>
            <h4>{element.snippet.title}</h4>
            <h3>{element.id.videoId}</h3>
          </div>
        )
      })}

    </div>
  );
}

export default SearchPage;