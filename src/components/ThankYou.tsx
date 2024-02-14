import React from "react";

interface ThankYouProps {
  // Add your component's props here
}

const ThankYou: React.FC<ThankYouProps> = (props) => {
  return (
    <section className="thankYou-section">
      <div className="container-box">
      <div className="feedback">
        <img src="https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/1c6a3aa5-5c00-44ee-87d5-9f0bf72e8ce9.png" alt="thankyou" />
        <h5>Check Your Inbox</h5>
        <p>We aim to respond to your inquiries within 24-48 hours.</p>
      </div>
      </div>
    </section>
  );
};

export default ThankYou;
