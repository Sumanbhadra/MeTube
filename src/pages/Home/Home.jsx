import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Category from "./Category";
import VideoCard from "./VideoCard";
import { API_KEY } from "../../data.js";
import Feed from "./Feed.jsx";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryId, setCategoryId] = useState(0);

  const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&videoCategoryId=`;

  const fetchApiData = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${URL}${categoryId}&key=${API_KEY}`);
      const data = await res.json();

      setApiData(data.items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData();
  }, [categoryId]);

  return (
    <div className="flex mt-16 ">
      <Sidebar />

      <div className="md:ml-36">
        <Category categoryId={categoryId} setCategoryId={setCategoryId} />
        {loading ? <h1>Loading....</h1> : <Feed apiData={apiData} />}
      </div>
    </div>
  );
};

export default Home;
