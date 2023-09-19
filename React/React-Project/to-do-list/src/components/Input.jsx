import React, { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function Input(props) {
    const inputBox = useRef();
  return (
    <div className=" p-3 flex justify-around ">
      <input
        type="text"
        placeholder="Enter data here"
              className=" w-[90%] p-3 focus:outline-none border border-slate-400"
              ref={inputBox}
      />
          <div onClick={() => {
              props.handler(inputBox.current.value);
              inputBox.current.value = "";
      }} className=" cursor-pointer w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-full flex justify-center items-center">
        <AiOutlinePlus />
      </div>
    </div>
  );
}

export default Input;
