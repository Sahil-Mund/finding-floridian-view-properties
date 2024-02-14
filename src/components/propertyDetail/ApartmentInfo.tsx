import React from "react";
import {
  ClockIcon,
  HomeIcon,
  BedroomIcon,
  BathIcon,
  VideoIcon,
  LocationSmIcon,
} from "../../assets/svg";
import InfoTile from "./InfoTile";
import { formatText } from "../../common/helper";
import FeatureAndPerk from "./FeatureAndPerk";
import DummyFeatureAndPerk from "./DummyFeatureAndPerk";

interface ApartmentInfoProps {
  // Add your component's props here
  data: any;
  ispremiumUser: boolean;
  unLock: boolean;
  onUnLock: () => void;
}

const ApartmentInfo: React.FC<ApartmentInfoProps> = ({
  data,
  ispremiumUser,
  unLock,
  onUnLock,
}) => {
  const {
    apartmentDetails,
    apartmentFeatures,
    extendedPerks,
    extendedPerksDesc,
  } = data;

  const infoArr = [
    {
      icon: <BedroomIcon />,
      title: `${apartmentDetails.bedroom} Bedroom`,
    },
    {
      icon: <BathIcon />,
      title: `${apartmentDetails.bath} Private Bath`,
    },
    {
      icon: <HomeIcon />,
      title: `${apartmentDetails.area} Sq.Ft`,
    },
    // {
    //   icon: <LocationSmIcon />,
    //   title: apartmentDetails.area,
    // },
  ];

  return (
    <>
      <div className="apartment-info-container">
        <div className="apartment-summary">
          <h2 className="title">APARTMENT</h2>
          <div className="info-tiles">
            {infoArr.map((item) => {
              return <InfoTile {...item} />;
            })}
          </div>
          <hr />
          <div className="apartment-description">
            {/* {apartmentDetails.desc} */}
            {/* <p dangerouslySetInnerHTML={{ __html: apartmentDetails.desc }}></p> */}
            {formatText(apartmentDetails.desc).map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
        <div className="apartment-img">
          <img src={apartmentDetails.img} alt="" />
          <div>
            <a href={apartmentDetails.video_src} target="_blank">
              <VideoIcon />
            </a>
            <span>Take a Home Tour</span>
          </div>
        </div>
      </div>
      <hr />
      {ispremiumUser ? (
        <>
          {" "}
          <FeatureAndPerk
            details={{ apartmentFeatures, extendedPerks, extendedPerksDesc }}
          />
          <hr />
        </>
      ) : (
        <DummyFeatureAndPerk
          details={{ apartmentFeatures, extendedPerks, extendedPerksDesc }}
          unLock={unLock}
          onUnLock={onUnLock}
        />
      )}
    </>
  );
};

export default ApartmentInfo;
