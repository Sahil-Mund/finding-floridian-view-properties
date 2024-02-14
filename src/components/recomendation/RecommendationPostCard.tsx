import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonModal from "./buttonModal";

import {
  BathSmIcon,
  BedRoomSmIcon,
  HomeSmIcon,
  LocationSmIcon,
  LockIcon,
  NextArrowIcon,
  UnlockIcon,
} from "../../assets/svg";
import { useUserModal } from "../../hooks/useUserModal";

interface RecommendationPostCardProps {
  // Add your component's props here
  data: any[];
}

const RecommendationPostCard: React.FC<RecommendationPostCardProps> = ({
  data,
}) => {
  // const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  // const [unLock, setUnLock] = useState<boolean>(false);
  // const [ispremiumUser, setIspremiumUser] = useState<boolean>(false);

  // const { onOpen } = useUserModal();

  // const handleUnlock = async () => {
  //   setUnLock(true);
  //   setTimeout(() => {
  //     setIspremiumUser(false);
  //     onOpen();
  //     setUnLock(false); // TODO:  will remove this later
  //   }, 3000);

  // };
  // const handleModal = (
  //   e: React.MouseEvent<HTMLSpanElement | HTMLDivElement>,
  //   isVisibe: boolean
  // ) => {
  //   setIsModalVisible(isVisibe);
  //   e.stopPropagation();
  // };

  return (
    <section className="recommendation-post-section">
      <div className="container-box">
        <div className="post-items">
          {data?.map((ele, index) => (
            <div className="post-item" key={index}>
              <div className="item-image">
                <img src={ele.image} alt={ele.title} />
                <Link to={`/property-details?d=${ele.id}&title=${ele.title}`}>
                  {" "}
                  <span> View Details </span>
                  <NextArrowIcon />
                </Link>
              </div>

              <div className="item-content">
                <h2 className="item-price"><span>$</span>&nbsp;{ele.price}</h2>
                <h2 className="item-title">{ele.title}</h2>

                <div className="item-amenities">
                  <div className="amenity amenity-1">
                    <BedRoomSmIcon />
                    {ele.bedroom} Bedroom
                  </div>
                  <div className="amenity amenity-2">
                    <BathSmIcon />
                    {ele.bathroom} Bathroom
                  </div>
                  <div className="amenity amenity-3">
                    <HomeSmIcon />
                    {ele.area} Sq.Ft
                  </div>
                  <div className="amenity amenity-4">
                    <LocationSmIcon />
                    {ele.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="bottom-section">
          <Link to={"/contact-us"}>
            <button>Talk with your Home Girl</button>
          </Link>
          <p onClick={(e) => handleModal(e, true)}>
            Not happy with the results?
          </p>
        </div> */}
      </div>
      {/* <div
        className="Modal"
        style={{ display: isModalVisible ? "block" : "none" }}
      >
        <ButtonModal />
      </div> */}
    </section>
  );
};

export default RecommendationPostCard;