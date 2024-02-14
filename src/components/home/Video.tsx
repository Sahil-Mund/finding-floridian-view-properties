import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PlayBtnIcon } from "../../assets/svg";
import { useScreenSize } from "../../hooks/useScreenSize";

interface VideoProps {
  url: string | ArrayBuffer;
}

const Video: React.FC<VideoProps> = ({ url }) => {
  const { isMobile } = useScreenSize();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener("canplaythrough", () => {
        setIsVideoLoaded(true);
      });
    }

    return () => {
      if (video) {
        video.removeEventListener("canplaythrough", () => {
          setIsVideoLoaded(true);
        });
      }
    };
  }, []);

  const handleClick = () => {
    navigate("/recommendation?type=buy");
  };

  // const handleMouseOver = () => {
  //   setIsHovered(true);
  //   const video = videoRef.current;
  //   if (video) {
  //     video.play().catch((error) => console.error("Autoplay failed:", error));
  //   }
  // };

  // const handleMouseOut = () => {
  //   setIsHovered(false);
  //   const video = videoRef.current;
  //   if (video) {
  //     video.pause();
  //     video.currentTime = 0; // Reset video to start when mouse out

  //   }
  // };

  const handleMouseOver = () => {
    setIsHovered(true);
    const video = videoRef.current;

    if (video && isVideoLoaded) {
      video.play().catch((error) => console.error("Autoplay failed:", error));
    }
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    const video = videoRef.current;

    if (video) {
      video.pause();
      video.currentTime = 0; // Reset video to start when mouse out
    }
  };

  return (
    <div className="video-container">
      {typeof url === "string" && (
        <video
          ref={videoRef}
          controls={false}
          width="100%"
          height="100%"
          src={url}
          muted // Mute the video
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      )}

      {(isMobile || !isHovered) && isVideoLoaded && (
        <div
          className="play-button-overlay"
          onClick={isMobile ? handleMouseOver : () => {}}
        >
          <PlayBtnIcon />
        </div>
      )}
    </div>
  );
};

export default Video;
