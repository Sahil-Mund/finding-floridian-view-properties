import React from "react";
import SocialIcon from "../home/SocialIcon";

// Making an HOC 
const withBannerBox = <P extends object>(WrappedComponent: React.FC<P>, showSocialIcon: boolean = true) => {


  return (props : P) => (
    <section className={`hero-section ${!showSocialIcon && 'questionnaire-hero-section'}`}>
      <div className="hero">
        <div className="image-container">
          <img
            src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/28873705-a8e0-4866-bd0e-2a3e48ddb30c.webp"
            alt=""
          />
          <img
            src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/531d38d8-401f-4a5f-a8ae-b87aec57dd37.png"
            alt=""
          />
        </div>
        <WrappedComponent  {...props}/>
       { showSocialIcon && <SocialIcon />}
      </div>
    </section>
  );
};

export default withBannerBox;
