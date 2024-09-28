import { API_KEY } from "../../data.js";
import { useEffect, useState } from "react";
import Comment from "./Comment.jsx";

export default function Comments({ videoId }) {
  const [commentsData, setCommentsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=`;

  const fetchCommentsApiData = async () => {
    try {
      const res = await fetch(`${URL}${videoId}&key=${API_KEY}`);
      const data = await res.json();

      setCommentsData(data.items);
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCommentsApiData();
  }, [videoId]);
  console.log(commentsData);
  return (
    <div className={`flex flex-col w-full items-stretch overflow-hidden`}>
      {!loading?commentsData.map((item, index) => (
        <div key={index} className="">
          <Comment item={item} />
        </div>
      )):<h1>Loading...</h1>}
      
      
    </div>
  );
}
