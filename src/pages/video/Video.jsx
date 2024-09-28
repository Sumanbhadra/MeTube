import React from "react";
import { useParams } from "react-router-dom";
import Playvideo from "./Playvideo";
import Recommedation from "./Recommedation";
import Comments from "./Comments";

const Video = () => {
  const { categoryId, videoId } = useParams();
  return (

      <div className="flex lg:flex-row flex-col  ">
        <div className="lg:w-3/4 w-full h-full">
          <Playvideo videoId={videoId} />
        </div>
        <div className="lg:w-1/4 w-full overflow-hidden ">
          <Recommedation categoryId={categoryId} />
        </div>
      </div>

    
  );
};

export default Video;
