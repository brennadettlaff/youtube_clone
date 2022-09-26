// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPage from './components/VideoPage/VideoPage';


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  const [searchedVids, setSearchedVids] = useState([]);

  useEffect(() => {
    fetchSearchedVideos();
  },[]);

  const fetchSearchedVideos = async () => {
    let response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=Bob Ross&key={YOUR API KEY}&part=snippet")
    debugger
    console.log("Youtube search response: ",response.data)
    setSearchedVids(response.data.items)
  };

  return (
    <div>
      {/* <VideoPage /> */}
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
