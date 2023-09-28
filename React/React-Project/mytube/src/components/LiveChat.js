import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      //Api polling
      console.log("polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "😂",
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <div className=" w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessage.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
