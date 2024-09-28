import React from "react";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import { IoMdMore } from "react-icons/io";


export default function Notification() {
  return (
    <div className=" absolute flex flex-col gap-4 bg-white text-black p-4  shadow-2xl text-sm right-0 rounded-xl md:w-96 w-80">
      <div className="flex items-start justify-between gap-2 ">
        <img src={jack} alt="" className="aspect-square w-14 rounded-full" />
        <div>
          <p className=" ">
            🚨 New upload from TechExplained: '5 Hidden Features in iOS 17'
            Watch now!
          </p>
          <p className="text-sm text-gray-500 mt-2">Just now</p>
        </div>
        <IoMdMore className='cursor-pointer text-xl'  />

      </div>
      <div className="flex items-start justify-between gap-2">
        <img src={simon} alt="" className="aspect-square w-14 rounded-full" />
        <div>
          <p>
          🎉 Congrats! Your channel just hit 500 subscribers. Keep up the great work!
          </p>
          <p className="text-sm text-gray-500 mt-2">2 Hours Ago</p>
        </div>
        <IoMdMore className='cursor-pointer text-xl'  />

      </div>
      <div className="flex items-start justify-between gap-2">
        <img src={jack} alt="" className="aspect-square w-14 rounded-full" />
        <div>
          <p>
          JaneDoe replied to your comment on 10 Best Workout Routines: 'I totally agree with you!
          </p>
          <p className="text-sm text-gray-500 mt-2">4 Hours Ago</p>
        </div>
        <IoMdMore className='cursor-pointer text-xl'  />

      </div>
      <div className="flex items-start justify-between gap-2">
        <img src={jack} alt="" className="aspect-square w-14 rounded-full" />
        <div>
          <p>
          CookingWithSam mentioned you in a comment: 'Thanks for the tip @simonmignolet0936! It worked perfectly!
          </p>
          <p className="text-sm text-gray-500 mt-2">6 Hours Ago</p>
        </div>
        <IoMdMore className='cursor-pointer text-xl'  />

      </div>
    </div>
  );
}
