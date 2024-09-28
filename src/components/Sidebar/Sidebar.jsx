import React from "react";
import {
  MdHomeFilled,
  MdOutlinePlaylistPlay,
  MdOutlineSubscriptions,
  MdOutlineWatchLater,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";

export default function Sidebar() {
  return (
    <div className="text-sm md:flex flex-col m-2 p-3 gap-6 items-center lg:w-1/12 w-1/12 h-screen hidden fixed">
      <div className="flex flex-col items-center">
        <span className="text-2xl ">
          <MdHomeFilled />
        </span>
        Home
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl ">
          <SiYoutubeshorts />
        </span>
        Shorts
      </div>
      <div className="flex flex-col items-center">
        <span className="text-2xl ">
          <MdOutlineSubscriptions />
        </span>
        Subscription
      </div>

      <div className="flex flex-col items-center">
        <span className="text-2xl ">
          <MdOutlinePlaylistPlay />
        </span>
        Playlist
      </div>

    </div>
  );
}
