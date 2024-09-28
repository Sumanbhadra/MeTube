import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Video from "./pages/video/Video";
import Searchvideos from "./pages/Home/Searchvideos";
import Feed from "./pages/Home/Feed";

export default function App() {
  return (
    <div className="fontfamily">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search/:query" element={<Searchvideos />} />

        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}
