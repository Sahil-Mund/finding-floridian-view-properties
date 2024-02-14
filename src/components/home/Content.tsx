import React from "react";
import { useNavigate } from "react-router-dom";

interface ContentProps {
  image: string;
  heading: string;
  subHeading: string;
  direction: "forward" | "backward";
  para: string;
}

const Content: React.FC<ContentProps> = ({
  image,
  heading,
  subHeading,
  direction,
  para,
}) => {
  const navigate = useNavigate();

  // const cssContent: React.CSSProperties = {
  //   flexDirection: direction === "forward" ? "row" : "row-reverse",
  // };

  const handleContactMe = () => {
    navigate('/contact-us')
  }

  return (
    <section className="content-section" >
    <div className="content-container" >
    <div className="image-container">
        <img src={image} alt="content-section" />
      </div>
      <div className="text-container">
        <div>HI {heading}</div>
        <div>{subHeading}</div>
        <p> {para}</p>
        <button className="btn-primary" onClick={handleContactMe}> Contact Me! </button>

      </div>
    </div>
    </section>
  );
};

export default Content;
