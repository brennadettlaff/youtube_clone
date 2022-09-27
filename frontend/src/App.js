// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import SearchBar from "./components/SearchBar/SearchBar";


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import SearchPage from "./pages/SearchPage/SearchPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  const [data, setData] = useState('');

  useEffect(() => {
    passedSearchTerm();
  })

  // M7lc1UVf-VE
  function passedSearchTerm(search_term){
    let response = search_term 
    setData(response)

    console.log(response)
  };

  return (
    <div>
      <SearchBar submittedSearchTerm={passedSearchTerm}/>
      <VideoPlayer testVideo={data} />

      <Navbar />
      <Routes>
        <Route path="/searchpage" element={<SearchPage data={data}/>}/>
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
