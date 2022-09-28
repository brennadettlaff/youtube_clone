import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import './SearchPage'



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

  const onClick = (event) =>{
    event.preventDefault();
    navigate('/videopage');
  };


  return (
    <div>
      {searchedVids.map((element) => {
        return (
          <div>
            <img src = {element.snippet.thumbnails.default.url} onClick={onClick}/>
            <h4>{element.snippet.title}</h4>
          </div>
        )
      })}

    </div>
  );
}

export default SearchPage;