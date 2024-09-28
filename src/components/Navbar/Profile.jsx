import React from "react";
import simon from "../../assets/simon.png";
import { GrGoogle } from "react-icons/gr";
import { GoSignOut } from "react-icons/go";
import {
  MdOutlineModeNight,
  MdOutlineSecurity,
  MdOutlineSwitchAccount,
} from "react-icons/md";
import { SiSpringsecurity, SiYoutubestudio } from "react-icons/si";
import { FaRegKeyboard } from "react-icons/fa";
import { CiDollar, CiGlobe,  CiSettings } from "react-icons/ci";
import { IoLanguage, IoMenu } from "react-icons/io5";
import {  IoMdHelpCircleOutline } from "react-icons/io";



export default function Profile() {
  return (
    <>
      <div className="absolute top-5  mr-14 right-0 bg-white p-2  shadow-2xl rounded-lg text-xl max-h-screen overflow-y-auto">
        <ul className="mb-5 ">
          <li className="flex gap-2  p-2 ">
            <img src={simon} alt="" className="rounded-full w-12 h-full" />
            <div className="">
              <p> Simon Mignolet</p>
              <p>@simonmignolet0936</p>
              <p className="text-blue-600 tracking-tighter">
                view your channel
              </p>
            </div>
          </li>
          <hr className="border-0 h-[1px] rounded-full bg-gray-200 my-3" />

          <li className="flex gap-3 items-center p-2">
            <GrGoogle />
            Google Account
          </li>
          <li className="flex gap-3 items-center p-2">
            <GoSignOut />
            Switch Account
          </li>
          <li className="flex gap-3 items-center p-2">
            <MdOutlineSwitchAccount />
            Sign out
          </li>
          <hr className="border-0 h-[1px] rounded-full bg-gray-200 my-3" />
          <li className="flex gap-3 items-center p-2">
            <SiYoutubestudio />
            Youtube Studio
          </li>
          <li className="flex gap-3 items-center p-2">
            <CiDollar />
            Purchase and Membership
          </li>
          <hr className="border-0 h-[1px] rounded-full bg-gray-200 " />
          <li className="flex gap-3 items-center p-2">
            <MdOutlineSecurity />
            Your data in Youtube
          </li>
          <li className="flex gap-3 items-center p-2">
            <MdOutlineModeNight /> Appearance: Device Theme
          </li>
          <li className="flex gap-3 items-center p-2">
            <IoLanguage />
            Language: English
          </li>
          <li className="flex gap-3 items-center p-2">
            <SiSpringsecurity />
            Restricted Mode: Off
          </li>
          <li className="flex gap-3 items-center p-2">
            <CiGlobe />
            Location: India
          </li>
          <li className="flex gap-3 items-center p-2">
            <FaRegKeyboard />
            Keyboard Shortcuts
          </li>
          <hr className="border-0 h-[1px] rounded-full bg-gray-200 my-3" />

          <li className="flex gap-3 items-center p-2">
            <CiSettings />
            Settings
          </li>
          <hr className="border-0 h-[1px] rounded-full bg-gray-200 my-3" />

          <li className="flex gap-3 items-center p-2">
            <IoMdHelpCircleOutline />
            Help
          </li>
        </ul>
      </div>
    </>
  );
}
