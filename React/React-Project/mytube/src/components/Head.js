import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    //API Call
    //make an api call after every key press
    //but if the difference between 2Api calls is < 200ms
    //the decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await res.json();
    //console.log(data[1]);
    setSuggestions(data[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className=" h-[56px] flex justify-between px-6 items-center ">
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

      <div className="flex flex-col items-center  p-2 col-span-10 h-10 w-[70%]">
        <div className="flex justify-center items-center p-2 col-span-10 h-10 w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className=" w-1/2 border p-1 outline-blue-700 border-gray-400 rounded-l-full"
          />
          <AiOutlineSearch className="cursor-pointer w-14 h-[33px] bg-[#f2f2f2] py-1  border border-gray-400 rounded-r-full" />
        </div>

        {showSuggestions && (
          <div className="fixed bg-white py-2 w-[31rem] top-[65px] left-[30rem] rounded-lg  border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className=" flex gap-2 px-2 items-center hover:bg-gray-200 transition-all duration-200 py-1"
                >
                  <AiOutlineSearch /> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
