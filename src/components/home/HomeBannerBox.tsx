import React from "react";
import { useNavigate } from "react-router-dom";

interface HomeBannerBoxProps {
  // Add your component's props here
}

const HomeBannerBox: React.FC<HomeBannerBoxProps> = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/questionnaire");
  };
  return (
    <div className="box-container">
      <h2>
        {" "}
        <span className="light"> LET YOUR </span>{" "}
        <span className="semibold"> HOME GIRL </span>
      </h2>
      <h2>
        {" "}
        <span className="light"> FIND YOUR PLACE </span>{" "}
        <span className="semibold"> TO CALL HOME </span>
      </h2>

      <button className="btn-primary" onClick={handleClick}>
        {" "}
        Let's get Started{" "}
      </button>
    </div>
  );
};

export default HomeBannerBox;
