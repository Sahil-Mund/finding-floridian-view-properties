import React from "react";
import { shopData } from "../assets/constansts";

import "../styles/shop.scss";
import { Link } from "react-router-dom";

interface ShopPageProps {
  // Add your component's props here
}

const ShopPage: React.FC<ShopPageProps> = (props) => {
  // const bannerImg = [
  //   "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e579d37c-cde2-4b32-93be-8d5924b1aef1.png",
  //   "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/b36fd4a2-9b5e-4ee6-ba16-77fec8d130c9.png",
  //   "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/721d64c2-56f1-4822-a7e5-03f7f5d34073.png",
  // ];
  const bannerImg = [
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/242e0578-52dc-465a-b13b-e0523584d4e7.webp",
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/e343661d-007a-464c-980c-8a74ad147644.webp",
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/50093d4b-ada7-413b-8e45-16039b3baefd.webp",
  ];
  return (
    <section className="shop">
      <div className="banner-container">
        <div className="banner">
          <div className="banner-content">
            <p>SHOP</p>
            <p>YOUR HOME GIRL’S FAVORITES</p>
          </div>
          <div className="banner-img">
            {bannerImg.map((url, index) => (
              <img src={url} key={index} alt="shop-banner-img" />
            ))}
          </div>
        </div>
      </div>
      <div className="post-container">
        <div className="posts">
          {shopData?.map((ele, index) => (
            <div className="post" key={index}>
              <div>
                <img src={ele.img} alt={ele.title} />
                <p>{ele.title}</p>
                <Link to="https://benable.com/findingfloridians">
                  Visit Our Shop
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
