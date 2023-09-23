import React from "react";

const list = [
  "All",
  "live",
  "Gaming",
  "Coding",
  "Programming",
  "Movies",
  "News",
  "Swimming",
  "Cricket",
  "Breaking",
  "Live",
  "Podcast",
  "Mixes",
  "Projects",
];

const Button = ({ name }) => {
  return (
    <div className="flex flex-nowrap">
      {list.map((item) => (
        <button key={item} className=" px-5 py-2 m-2 bg-gray-200 rounded-lg ">
          {item}
        </button>
      ))}
    </div>
  );
};

export default Button;
