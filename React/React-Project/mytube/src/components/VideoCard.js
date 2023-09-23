import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  console.log(info);

  return (
    <div className=" p-2 m-2 w-1/6 shadow-lg cursor-pointer">
      <img className=" rounded-lg " alt="thumb" src={thumbnails.medium.url} />
      <ul>
        <li className=" font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
