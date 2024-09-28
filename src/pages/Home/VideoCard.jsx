import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { dataCovertor } from "../../data.js";

export default function VideoCard({ item }) {
  return (
    <>
      <Link to={`/video/${item.snippet.categoryId}/${item.id}`}>
        <img
          className="rounded-lg w-full"
          src={item?.snippet?.thumbnails?.maxres?.url || item?.snippet?.thumbnails?.medium?.url}
          alt={item.snippet.title}
        />
        <h1 className="font-semibold p-1 line">{item.snippet.title}</h1>
      </Link>
      <p className="p-1">{item.snippet.channelTitle}</p>

      <div className="flex gap-4 p-1">
        <p className="">{dataCovertor(item.statistics.viewCount)} Views </p>
        <p className="">{moment(item.snippet.publishedAt).fromNow()}</p>
      </div>
    </>
  );
}
