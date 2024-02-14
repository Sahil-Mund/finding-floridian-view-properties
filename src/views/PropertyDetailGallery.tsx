import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  LoveIcon,
  NextIcon,
  PrevIcon,
  PropertyDetailsBackIcon,
  Share2Icon,
  ShareIcon,
} from "../assets/svg";

import "../styles/property-gallery.scss";
// import { rentalApartmanetDetails } from "../assets/constansts";

interface PropertyDetailGalleryProps {
  // Add your component's props here
}

const PropertyDetailGallery: React.FC<PropertyDetailGalleryProps> = (props) => {
  //TODO: USE LOGIC TO CHECK WHETHER THE GALLERY WILL BE OF RENT/SELL
  // const images = rentalApartmanetDetails.gallery;
  const [currentFirstImageIdx, setCurrentFirstImageIdx] = useState<number>(0);
  const [mobileImgIdx, setMobileImgIdx] = useState<number>(0);
  const [currentSecondImageIdx, setCurrentSecondImageIdx] = useState<number>(1);
  const navigate = useNavigate();

  const location = useLocation();
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setImages(location?.state?.gallery || []);
    setTitle(location?.state?.title);
  }, [location]);

  const handlePrevClick = () => {
    if (currentFirstImageIdx === 0 || currentSecondImageIdx === 1) return;
    setCurrentFirstImageIdx((prev) => prev - 2);
    setCurrentSecondImageIdx((prev) => prev - 2);
  };
  const handleNextClick = () => {
    if (
      currentSecondImageIdx === images.length - 1 ||
      currentFirstImageIdx + 1 === images.length
    ) {
      return;
    }
    setCurrentFirstImageIdx((prev) => prev + 2);
    setCurrentSecondImageIdx((prev) => prev + 2);
  };

  const handleMobilePrevClick = () => {
    if (mobileImgIdx === 0) return;
    setMobileImgIdx((prev) => prev - 1);
  };
  const handleMobileNextClick = () => {
    if (mobileImgIdx === images.length - 1) return;

    setMobileImgIdx((prev) => prev + 1);
  };

  return (
    <>
      <section className="property-details-gallery desktop-version">
        <div className="btns">
          <PropertyDetailsBackIcon onClick={() => navigate(-1)} />
          <span className="image-index">
            {currentSecondImageIdx + 1}/{images.length}
          </span>
          <div className="icons">
            <ShareIcon />
            <Share2Icon />
            <LoveIcon />
          </div>
        </div>
        <div className="image-container">
          <PrevIcon onClick={handlePrevClick} />
          <div className="images">
            <img src={images[currentFirstImageIdx]} alt="" />
            <img src={images[currentSecondImageIdx]} alt="" />
          </div>
          <NextIcon onClick={handleNextClick} />
        </div>
        <div className="property-title">
          <p>{title}</p>
        </div>
      </section>

      <section className="property-details-gallery mobile-version">
        <div className="btns">
          <div className="icons">
            <PropertyDetailsBackIcon onClick={() => navigate(-1)} />
            <ShareIcon />
            <Share2Icon />
            <LoveIcon />
          </div>
        </div>
        <div className="image-index">
          {mobileImgIdx + 1}/{images.length}
        </div>
        <div className="image-container">
          <div className="images">
            <img src={images[mobileImgIdx]} alt="" />
          </div>
        </div>
        <div className="navigations">
          <PrevIcon onClick={handleMobilePrevClick} />
          <NextIcon onClick={handleMobileNextClick} />
        </div>
        <div className="property-title">
          <p>Fridai Apartment</p>
        </div>
      </section>
    </>
  );
};

export default PropertyDetailGallery;
