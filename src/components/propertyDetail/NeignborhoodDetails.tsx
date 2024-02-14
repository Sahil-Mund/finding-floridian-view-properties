import React from "react";
import { ShareIcon, StraightLine } from "../../assets/svg";

interface NeignborhoodDetailsProps {
  // Add your component's props here
  data: any;
}

const NeignborhoodDetails: React.FC<NeignborhoodDetailsProps> = ({ data }) => {
  const leftGradeVarities = [
    "Safety",
    "Cultural Diversity",
    "Education & Schools",
  ];
  const rightGradeVarities = [
    "Convenience",
    "Healthcare Facilities",
    "Scenic Views",
  ];

  return (
    <div className="neighborhood-container">
      <div className="grade">
        <div className="top">
          <div className="neighborhood-grade">
            <span className="grade-btn">{data.grade}</span>
            <span className="title">Neighborhood Grade</span>
          </div>
          <p>
            {data.property_title}&nbsp;{data.desc}
          </p>
        </div>
        <div className="bottom">
          <div className="left">
            {leftGradeVarities.map((ele, index) => (
              <div key={index}>
                <span className="grade-btn-sm">{data[ele]}</span>
                <span className="grades-desc">{ele}</span>
              </div>
            ))}
          </div>
          <StraightLine />
          <div className="right">
            {rightGradeVarities.map((ele, index) => (
              <div key={index}>
                <span className="grade-btn-sm">{data.grade}</span>
                <span className="grades-desc">{ele}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          src={data.iframe_src}
          width="600"
          height="450"
          loading="lazy"
          title="map"
          id="map-iframe"
        ></iframe>

        <div>
          <a href={data.iframe_src} target="_blank" rel="noopener noreferrer">
            <ShareIcon
              style={{ position: "absolute", top: "1%", right: "10px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NeignborhoodDetails;
