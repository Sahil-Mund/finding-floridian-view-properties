import React from "react";
import DropDown from "./Dropdown";
import Video from "./home/Video";
import { DownArrowIcon, UpDownIcon } from "../assets/svg";

interface VideoGalleryProps {
  // Add your component's props here
  videos: any[];
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ videos }) => {
  

  return (
    <div className="container-box">
      <div className="content">
        <div className="left">
          <p>Explore home tours to find the perfect home </p>
        </div>
        <div className="right">
          <div>
            <UpDownIcon  className="up-down-icon"/>
            <DropDown />
            {/* <DownArrowIcon /> */}
          </div>
        </div>
      </div>
      <div className="gallery">
        {videos?.map((videoSource, index) => (
          <Video key={index} url={videoSource}  />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
