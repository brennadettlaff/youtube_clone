import React, {useState, useEffect} from 'react';
import axios from "axios";
import SearchBar from '../../components/SearchBar/SearchBar';

// const SearchPage = (props) => {
//     return ( 
//         // html iframe code with {} containing SearchBar input//
//      );
// }
 
// export default SearchPage;

function App() {
  const [searchedVids, setSearchedVids] = useState([]);

  useEffect(() => {
    fetchSearchedVideos();
    // fetchRelatedVids()
    // fetchSingleVideoData();
  },[]);

  const fetchSearchedVideos = async () => {
    let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=Bob Ross&key={AIzaSyCkOwnACYtTMTuv-AY50DGVDGkVXZHg4TE}&part=snippet")
    debugger
    console.log("Youtube search response: ",response.data)
    setSearchedVids(response.data.items)
  };

  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com`}
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default App;