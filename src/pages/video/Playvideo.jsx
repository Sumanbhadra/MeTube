import React, { useEffect, useState } from "react";
import { API_KEY, dataCovertor } from "../../data.js";
import simon from "../../assets/simon.png";
import { FaShare } from "react-icons/fa";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { IoIosMore } from "react-icons/io";
import { MdSort } from "react-icons/md";
import Comments from "./Comments.jsx";
import { LiaDownloadSolid } from "react-icons/lia";
import moment from "moment";

export default function Playvideo({ videoId }) {
  const [videoDetails, setVideoDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const fetchVideoDetails = async () => {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    );
    const data = await response.json();
    setLoading(false);

    setVideoDetails(data.items[0]);
  };
  useEffect(() => {
    fetchVideoDetails();
  }, [videoId]);

  function handleclick() {
    setShowMore(!showMore);
  }

  return (
    <>
      {!loading ? (
        <div className="mt-20 md:px-6 px-2 flex-col items-stretch mx-auto ">
          <iframe
            className="w-full aspect-video rounded-xl  items-center"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <h1 className="md:text-2xl text-xl font-semibold mt-6 p-2">
            {videoDetails.snippet.localized.title}
          </h1>
          <div className="flex md:flex-row flex-col gap-2 md:text-xl mb-5 ">
            <div className="flex items-center justify-start gap-2">
              <div className="w-[60px] aspect-square bg-gray-300 rounded-full"></div>
              <div className="flex flex-col ">
                <span className="text-xl font-semibold ">
                  {videoDetails.snippet.channelTitle}{" "}
                </span>
                <span >
                  {dataCovertor(videoDetails.statistics.subscriberCount)}3M
                  Subscribers
                </span>
              </div>
              <span className="bg-black text-white p-3 px-6 rounded-full  cursor-pointer  md:w-auto text-center">
                Subscribe
              </span>
            </div>
            <div className="flex gap-1 justify-between items-center md:mt-0 mt-2">
              <span className="flex text-nowrap gap-2 md:px-5 px-3 items-center bg-gray-200 p-3 rounded-full cursor-pointer">
                <AiOutlineLike />
                {dataCovertor(videoDetails.statistics.likeCount)} |
                <AiOutlineDislike />
              </span>
              <span className="flex gap-3 md:px-5 px-3 items-center bg-gray-200 p-3 rounded-full cursor-pointer">
                <FaShare />
                Share
              </span>
              <span className="flex items-center bg-gray-200 p-3 rounded-full cursor-pointer md:hidden">
                <LiaDownloadSolid />
                Download
              </span>
              <span className=" bg-gray-200 p-3 px-5 rounded-full cursor-pointer">
                <IoIosMore className="mt-1" />
              </span>
            </div>
          </div>
          <div className="bg-gray-200 p-2 rounded-lg">
            <span className="font-semibold">
              {dataCovertor(videoDetails.statistics.viewCount)} Views
            </span>
            <span className="font-semibold">
              {" "}
              - {moment(videoDetails.snippet.publishedAt).fromNow()}
            </span>
            <p className={showMore ? `` : `line-clamp-2`}>
              {videoDetails.snippet.description}
            </p>
            <p className="font-semibold cursor-pointer" onClick={handleclick}>
              {showMore ? `...less` : `...more`}
            </p>
          </div>
          <div className="flex items-center justify-start gap-10 my-5">
            <span className="text-3xl font-semibold">
              {videoDetails.statistics.commentCount} Comments
            </span>{" "}
            <span className="flex text-xl items-center gap-2">
              <MdSort className="text-3xl" /> Sort by
            </span>{" "}
          </div>
          <div className="flex gap-3 my-10">
            <img className="h-10 w-10 rounded-full" src={simon} alt="profile" />
            <div className="w-full">
              <p className="text-gray-500">Add a Comment</p>
              <hr />
            </div>
          </div>
          <Comments videoId={videoId} />
        </div>
      ) : (
        <h1 className="h-screen w-screen text-center items-center">
          Loading...
        </h1>
      )}
    </>
  );
}
