import React, { useEffect, useState } from "react";
import logo from "../../assets/metube.png";
import mobile from "../../assets/metube_mobile.png";
import simon from "../../assets/simon.png";

import { IoMenu } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { BiMicrophone } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

import Profile from "./Profile";
import Notification from "./Notification";


export default function Navbar() {
  const [query, setQuery] = useState("");
  const [profile, setProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  const [showMenu, setShowMenu] = useState(false);



  return (
    <nav className="flex h-16 items-center p-2 text-4xl gap-3  fixed top-0 w-full bg-white text-gray-800">
      <IoMenu
        className="text-6xl md:hidden cursor-pointer"
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu ? (
        <div className="absolute top-10   left-0 bg-white p-2  shadow-2xl rounded-lg text-xl max-h-screen overflow-y-auto"></div>
      ) : null}
      <Link to="/" className="md:w-[250px] w-[90px]">
        <img src={logo} alt="YouTube" className=" h-full p-1 md:block hidden" />
        <img
          src={mobile}
          alt="YouTube"
          className=" h-full p-1 md:hidden block"
        />
      </Link>
      <form action="" className="w-full">
        <div className="w-full h-12 flex justify-center text-xl items-center gap-1">
          <div className="md:w-1/2  md:2/3 h-full  border-solid border-2 rounded-full  flex justify-between items-center overflow-hidden">
            <input
              className="w-full h-full  px-4 outline-none border-none"
              onChange={(e) => setQuery(e.target.value)}
              
              type="text"
              placeholder="Search"
            />
            <Link
              to={`/search/${query}`}
              className="bg-gray-300 border-none text-3xl p-4 "
            >
              <button className="mt-1">
                <CiSearch />
              </button>
            </Link>
          </div>
          <div className="bg-gray-200 p-3  rounded-full ">
            <BiMicrophone />
          </div>
        </div>
      </form>
      <div className="cursor-pointer hidden md:block">
        <RiVideoAddLine />
      </div>

      <div
        className="relative cursor-pointer"
        onClick={() => {
          setNotification(!notification);
          setProfile(false);
        }}
      >
        <IoIosNotifications className=" " />
        <div className="absolute text-xs top-0 right-0 p-1 bg-red-500 text-white rounded-full">
          9+
        </div>
        {notification ? <Notification /> : null}
      </div>
      <div className=" aspect-square h-10 ">
        <img
          onClick={() => {
            setProfile(!profile);
            setNotification(false);
          }}
          src={simon}
          alt=""
          className="rounded-full cursor-pointer"
        />
        {profile ? <Profile /> : null}
      </div>
    </nav>
  );
}
