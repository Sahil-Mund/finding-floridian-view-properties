import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BathSmIcon,
  BedRoomSmIcon,
  HomeSmIcon,
  LocationSmIcon,
  LockIcon,
  NextArrowIcon,
  UnlockIcon,
} from "../assets/svg";

interface PostCardProps {
  // Add your component's props here
  data: any[];
  type: string;
}

const PostCard: React.FC<PostCardProps> = ({ data, type }) => {
  const [unLock, setUnLock] = useState<boolean>(false);
  const [ispremiumUser, setIspremiumUser] = useState<boolean>(false);

  const handleUnlock = () => {
    setUnLock(true);
    setTimeout(() => {
      setIspremiumUser(true);
    }, 3000);
  };
  return (
    <section className="post-section">
      <div className="container-box">
        <h2>Here are the {type} options for you to pick</h2>
        {/* <UnlockIcon/> */}
        <div className="post-items">
          {data?.map((ele, index) => (
            <div className="post-item" key={index}>
              <div className="item-image">
                <img src={ele.image} alt={ele.title} />
                <Link to={ele.url} state={{ data: ele }}>
                  {" "}
                  <span> View Details </span>
                  <NextArrowIcon />
                </Link>
              </div>

              {ispremiumUser || index === 0 ? (
                <div className="item-content">
                  <h2 className="item-price">{ele.price}</h2>
                  <h2 className="item-title">{ele.title}</h2>

                  <div className="item-amenities">
                    <div className="amenity amenity-1">
                      <HomeSmIcon />
                      {ele.amenitie1}
                    </div>
                    <div className="amenity amenity-2">
                      <BedRoomSmIcon />
                      {ele.amenitie2}
                    </div>
                    <div className="amenity amenity-3">
                      <BathSmIcon />
                      {ele.amenitie3}
                    </div>
                    <div className="amenity amenity-4">
                      <LocationSmIcon />
                      {ele.amenitie4}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={`btn-unlock ${unLock && "animated"}`}>
                    {unLock ? (
                      <>
                        {" "}
                        <UnlockIcon className="unlock-icon" />
                        {/* <LockIcon className="lock-icon" /> */}
                      </>
                    ) : (
                      <>
                        <span onClick={handleUnlock} className="pointer">
                          Unlock Premium Insights
                        </span>
                        <LockIcon />
                      </>
                    )}
                  </div>
                  <div className="item-content dummy-content">
                    <h2 className="item-price">$4,600</h2>
                    <h2 className="item-title">Magnolia Heights</h2>

                    <div className="item-amenities">
                      <div className="amenity amenity-1">
                        <HomeSmIcon />
                        2-3 Guests
                      </div>
                      <div className="amenity amenity-2">
                        <BedRoomSmIcon />1 Bedroom
                      </div>
                      <div className="amenity amenity-3">
                        <BathSmIcon />1 Private Bath
                      </div>
                      <div className="amenity amenity-4">
                        <LocationSmIcon />
                        Central Florida
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="bottom-section">
          <button>Load More</button>
        </div>
      </div>
    </section>
  );
};

export default PostCard;
