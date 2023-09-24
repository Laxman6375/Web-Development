import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="h-[56px] flex justify-between px-6 items-center  shadow-lg">
      <div className="flex  items-center col-span-1 gap-x-3">
        <GiHamburgerMenu
          className=" text-2xl w-10 h-10 p-2 bg-white rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
          onClick={() => toggleMenuHandler()}
        />

        <Link to="/">
          <img
            className=" cursor-pointer"
            src="https://images.indianexpress.com/2023/08/youtube-logo-featured.jpg"
            alt="logo"
            width={90}
            height={20}
          />
        </Link>
      </div>

      <div className="flex justify-center items-center p-2 col-span-10 h-10 w-[70%]">
        <input
          type="text"
          className=" w-1/2 border p-1 border-gray-400 rounded-l-full"
        />
        <AiOutlineSearch className="cursor-pointer w-14 h-[33px] bg-[#f2f2f2] py-1  border border-gray-400 rounded-r-full" />
      </div>

      <div className=" flex col-span-1 h-10  items-center gap-x-3">
        <RiVideoAddLine className="cursor-pointer text-2xl w-10 h-10 p-2 bg-white rounded-full hover:bg-gray-300 transition duration-300 ease-in-out" />
        <IoMdNotifications className="cursor-pointer text-2xl w-10 h-10 p-2 bg-white rounded-full hover:bg-gray-300 transition duration-300 ease-in-out" />
        <BiSolidUserCircle className="cursor-pointer text-[32px] w-10 h-10 p-2 bg-white rounded-full hover:bg-gray-300 transition duration-300 ease-in-out" />
      </div>
    </div>
  );
};

export default Head;
