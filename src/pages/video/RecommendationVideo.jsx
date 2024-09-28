import React from "react";
import { Link } from "react-router-dom";

export default function Recommedationvideo({ item }) {
  return (
    <>
      <div className="flex flex-row gap-2 w-full mb-4">
        <div className="w-2/5">
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className=""
          >
            <img
              className="rounded-lg "
              src={item.snippet.thumbnails.maxres.url}
              alt={item.snippet.title}
            />
          </Link>
        </div>

        <div className="w-3/5">
          <p className="font-semibold text-sm p-1 text-wrap line-clamp-2 ">
            {item.snippet.title}
          </p>
          <p className="p-1 ">{item.snippet.channelTitle}</p>
        </div>
      </div>
    </>
  );
}
