import React from "react";
import { useParams, Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { API_KEY } from "../../data.js";
import { useEffect, useState } from "react";
import { IoMdMore } from "react-icons/io";
import moment from "moment";
import SearchCategory from "./SearchCategory.jsx";

export default function Searchvideos() {
  const { query } = useParams();
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=`;

  const fetchApiData = async () => {
    try {
      const res = await fetch(`${URL}${query}&key=${API_KEY}`);
      const data = await res.json();

      setApiData(data.items);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData();
  }, [query]);
  console.log(apiData);
  return (
    <div className="flex mt-20 ">
      <Sidebar />
      <div className="md:ml-36 px-5">
        <SearchCategory/>
        {loading ? (
          <h1 className="">Loading...</h1>
        ) : (
          <div className=" flex flex-col gap-4 ">
            {apiData.map((item, index) => (
              <div className="flex w-full gap-4" key={index}>
                <Link to={`/video/0/${item.id.videoId}`} className="w-2/5">
                  <img
                    className=" aspect-video rounded-lg "
                    src={item.snippet.thumbnails.medium.url}
                    alt={item.snippet.title}
                  ></img>
                </Link>

                <div className="w-3/5 ">
                  <Link to={`/video/0/${item.id.videoId}`} className="">
                    {" "}
                    <h1 className=" sm:text-xl ">{item.snippet.title}</h1>
                    <p className="sm:text-sm">
                      {moment(item.snippet.publishedAt).fromNow()}
                    </p>
                  </Link>

                  <p className="text-sm my-2">{item.snippet.channelTitle}</p>
                  <p className="text-sm line-clamp-1">
                    {item.snippet.description}
                  </p>
                </div>
                <IoMdMore />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
