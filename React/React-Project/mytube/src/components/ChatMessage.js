import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";



const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <BiSolidUserCircle className=" text-2xl" />
      <span className=" font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
