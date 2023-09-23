import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  //early return pattern
  if (!isMenuOpen) return null;

  return (
    <div className=" w-48 p-5 shadow-lg">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>

      <ul className=" mt-8">
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
      </ul>

      <ul className=" mt-8">
        <li>Subscriptions</li>
        <li>Explore</li>
        <li>More from YouTube</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
