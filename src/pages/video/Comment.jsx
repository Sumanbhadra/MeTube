import React from 'react'
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { API_KEY, dataCovertor } from "../../data.js";
import { IoMdMore } from 'react-icons/io';


export default function Comment({item}) {
  return (
    <div className='flex justify-between'>
        <div className="flex gap-2 items-start">
            <img
            className="rounded-full w-10 h-10 mb-3 mt-1"
            src={item.snippet.topLevelComment.snippet.authorProfileImageUrl}
            alt={item.snippet.title}
            />
            <div className="">
            <p className="font-semibold text-sm p-1 text-wrap line-clamp-2 ">{item.snippet.topLevelComment.snippet.authorDisplayName}</p>
            <p className="p-1 ">{item.snippet.topLevelComment.snippet.textOriginal}</p>
            <span className="flex gap-3 px-5 items-center  p-3 rounded-full cursor-pointer font-light">
              <AiOutlineLike />
              {dataCovertor(item.snippet.topLevelComment.snippet.likeCount)} 
              <AiOutlineDislike /> Reply
            </span>
            </div>
            
        </div>
        <IoMdMore className='cursor-pointer'  />
    </div>
  )
}
