import React, { useState } from "react";
import Video from "./Video";
import { useNavigate } from "react-router-dom";
import { NextIcon, PrevIcon } from "../../assets/svg";

interface VideoSliderProps {
  videoUrls: string[];
}

const VideoSlider: React.FC<VideoSliderProps> = ({ videoUrls }) => {
  const navigate = useNavigate();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePrev = () => {
    if (currentVideoIndex === 0) return;

    setCurrentVideoIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = (deviceType: string) => {
    if (deviceType === "desktop") {
      if (currentVideoIndex + 4 === videoUrls.length) return;
    } else {
      if (currentVideoIndex + 1 === videoUrls.length) return;
    }

    setCurrentVideoIndex((prevIndex) =>
      Math.min(videoUrls.length - 1, prevIndex + 1)
    );
  };

  const handleViewAll = () => {
    navigate("/home-tour");
  };

  return (
    <>
      <section className="video-slider-section desktop-video-slider">
        <div className="video-slider">
          <PrevIcon
            className="naviagte-icon"
            onClick={handlePrev}
            style={{
              opacity: currentVideoIndex === 0 ? 0.1 : 1,
            }}
          />

          <div className="slider-container">
            {videoUrls
              .slice(currentVideoIndex, currentVideoIndex + 4)
              ?.map((url, index) => (
                <div
                  key={index}
                  className={`video-slide ${
                    index === currentVideoIndex ? "active" : ""
                  }`}
                >
                  <Video url={url} />
                </div>
              ))}
          </div>

          <NextIcon
            className="naviagte-icon"
            onClick={() => handleNext("desktop")}
            style={{
              opacity: currentVideoIndex + 4 === videoUrls.length ? 0.1 : 1,
            }}
          />
        </div>

        <div className="below-section">
          <p>Click the videos to see similar homes currently available.</p>
          <button className="btn-primary" onClick={handleViewAll}>
            View All
          </button>
        </div>
      </section>
      <section className="video-slider-section mobile-video-slider">
        <div className="video-slider">
          <PrevIcon
            className="naviagte-icon"
            onClick={handlePrev}
            style={{
              opacity: currentVideoIndex === 0 ? 0.1 : 1,
            }}
          />

          <div className="slider-container">
            <div className={`video-slide active`}>
              <Video url={videoUrls[currentVideoIndex]} />
            </div>
          </div>

          <NextIcon
            className="naviagte-icon"
            onClick={() => handleNext("mobile")}
            style={{
              opacity: currentVideoIndex + 1 === videoUrls.length ? 0.1 : 1,
            }}
          />
        </div>

        <div className="below-section">
          <p>Click the videos to see similar homes currently available.</p>
          <button className="btn-primary" onClick={handleViewAll}>
            View All
          </button>
        </div>
      </section>
    </>
  );
};

export default VideoSlider;
