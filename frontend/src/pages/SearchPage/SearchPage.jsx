import React, {useState, useEffect} from 'react';
import axios from "axios";
import './SearchPage'


const SearchPage = (props) => {
  return (
    <div>
      {console.log(props.data)}
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={"https://www.youtube.com/embed/" + props.data + "?autoplay=1&origin=http://example.com"}
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default SearchPage;