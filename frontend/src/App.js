// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from 'react';

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import VideoPage from "./pages/VideoPage/VideoPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import SearchBar from "./components/SearchBar/SearchBar";


// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    passedSearchTerm();
  })


  function passedSearchTerm(search_term){
    let response = search_term 
    setData(response)
  };

  return (
    <div>
      <Navbar />
      <SearchBar submittedSearchTerm={passedSearchTerm}/>
    

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
        <Route path="/searchpage" element={<SearchPage data={data}/>}/>
        <Route path="/videopage/:videoId" element={<VideoPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;