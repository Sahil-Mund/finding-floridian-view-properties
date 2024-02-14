import React from "react";
// ! Not being used

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="image-container">
          <img
            src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/4caa2074-04a8-4e2b-a27a-7321948814ca.png"
            alt=""
          />
          <img
            src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/faf97c0e-9c9b-4d2b-bd87-323282d95204.png"
            alt=""
          />
          <img
            src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/57e841ed-d2f9-4a00-ad7e-23ca6a9ea21e.png"
            alt=""
          />
        </div>
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

          <button className="btn-primary"> Let's get Started </button>
        </div>
        <div className="social-icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="213"
            height="27"
            viewBox="0 0 213 27"
            fill="none"
          >
            {/* {homeSocialIcons.map((ele, index) => (
              <a href={ele.url} key={index} target="_blank" rel="noreferrer">
                <path d={ele.path} fill="#6A704C" />
              </a>
            ))} */}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
