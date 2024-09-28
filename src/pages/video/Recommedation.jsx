import React from "react";
import { API_KEY } from "../../data.js";
import { useEffect, useState } from "react";
import VideoCard from "../Home/VideoCard.jsx";
import Recommedationvideo from "./RecommendationVideo.jsx";
import RecommendationCategory from "./RecommendCategory.jsx";

export default function Recommedation({ categoryId }) {
  const [apiData, setApiData] = useState([]);

  const URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&videoCategoryId=`;

  const fetchApiData = async () => {
    try {
      const res = await fetch(`${URL}${categoryId}&key=${API_KEY}`);
      const data = await res.json();

      setApiData(data.items);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData();
  }, [categoryId]);
  return <div className="mt-20 mx-2 lg:mx-0">
    <div className="flex-col gap-4">
      <RecommendationCategory/>
          {apiData.map((item, index) => (
            <Recommedationvideo key={index} item={item} />
          ))}
        </div>
  </div>;
}
