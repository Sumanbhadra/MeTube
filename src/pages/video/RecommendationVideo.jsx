import React from "react";
import { Link } from "react-router-dom";

export default function Recommedationvideo({ item }) {
  return (
    <>
        <div className="flex gap-2">
        <img
          className="rounded-lg w-1/2 h-4/5 mb-3"
          src={item.snippet.thumbnails.standard.url}
          alt={item.snippet.title}
        />
        <div className="">
        <p className="font-semibold text-sm p-1 text-wrap line-clamp-2 ">{item.snippet.title}</p>
        <p className="p-1 ">{item.snippet.channelTitle}</p>
        </div>
        </div>
   

      
    </>
  );
}
