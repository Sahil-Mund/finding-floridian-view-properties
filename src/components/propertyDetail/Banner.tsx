import React from "react";
import {
  BlueTick,
  GalleryIcon,
  YellowStar,
  LocationIcon,
} from "../../assets/svg";
import { formatText } from "../../common/helper";
import { Link } from "react-router-dom";

interface BannerProps {
  // Add your component's props here
  data: any;
  propertyType: "RENT" | "BUY";
  gallery: any;
  title: string;
}

const Banner: React.FC<BannerProps> = ({ data, propertyType, gallery , title}) => {
  // const {
  //   propertyOwner: { email: propertyOwnerEmail },
  // } = data;

  const propertyOwnerEmail = "";
  const handleContactProperty = () => {
    // TODO : write logic for sending email
    console.log(`Email Sent to ${propertyOwnerEmail}`);
  };


  return (
    <section className="banner">
      <div className="image-container">
        <img className="banner-image" src={data?.img_url} alt="" />
        <Link to={`/property-details/gallery`} state={{
           gallery,
           title
        }}>
          <div>
            <GalleryIcon />
            <span>Show all photos</span>
          </div>
        </Link>
      </div>
      <div className="banner-details">
        <span className="heading">
          {data.heading} <BlueTick className="no-external-fill" />{" "}
        </span>
        <span className="sub-heading">{data.subheading}</span>
        {/* <i>{data.desc}</i> */}
        <div className="ratings">
          <span>
            <YellowStar className="no-external-fill" /> <b>{data.rating}</b>{" "}
            {data.review && (
              <span className="reviews">({data.review} reviews )</span>
            )}
          </span>
          <span>
            <LocationIcon
              className="no-external-fill"
              style={{ width: "14px", height: "14px" }}
            />{" "}
            {data.location}
          </span>
        </div>
        <div className="descriptions">
          {/* <p>{data.para}</p> */}
          {formatText(data.para).map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <div className="price">
          <span>{data.price}</span>
          <span>{data.freq}</span>
        </div>

        <div className="btns">
          <Link
            to={"/"}
            
            style={{
              width: propertyType === "BUY" ? "100%" : "",
            }}
          >
            <button
              className="btn-primary"
              style={{
                width: propertyType === "BUY" ? "100%" : "",
                maxWidth: propertyType === "BUY" ? "100%" : "400px",
              }}
            >
              {data.buttonLabel}
            </button>
          </Link>
          {/* Hiding the below button in Buy properties */}
          {propertyType === "RENT" && (
            <button className="btn-primary" onClick={handleContactProperty}>
              Contact Property
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
