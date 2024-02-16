import React from "react";
import { ShareIcon, StraightLine } from "../../assets/svg";

interface NeignborhoodDetailsProps {
  // Add your component's props here
  data: any;
}

const NeignborhoodDetails: React.FC<NeignborhoodDetailsProps> = ({ data }) => {
  // const leftGradeVarities = [
  //   "Safety",
  //   "Cultural Diversity",
  //   "Education & Schools",
  // ];
  // const rightGradeVarities = [
  //   "Convenience",
  //   "Healthcare Facilities",
  //   "Scenic Views",
  // ];

  console.log(data);
  
  const leftGradeVarities = data.left;
  const rightGradeVarities = data.right;

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
            {Object.entries(data.left).map(([key, value]) => (
              <div key={key}>
                <span className="grade-btn-sm">{data.left[key]}</span>
                <span className="grades-desc">{key}</span>
              </div>
            ))}
          
          </div>
          <StraightLine />
          <div className="right">
          {Object.entries(data.right).map(([key, value]) => (
              <div key={key}>
                <span className="grade-btn-sm">{data.right[key]}</span>
                <span className="grades-desc">{key}</span>
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
          <a href={data.location_url} target="_blank" rel="noopener noreferrer">
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
