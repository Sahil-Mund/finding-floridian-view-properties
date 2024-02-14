import React, { useEffect, useState } from "react";
import { navigationURLs } from "../../assets/constansts";
import SocialIcon from "../home/SocialIcon";
import { Link, useLocation } from "react-router-dom";

import "../../styles/footer.scss";
import { useForm } from "../../hooks/useForm";
import {
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
} from "../../assets/svg";

interface FooterProps {
  // Add your component's props here
}

interface NavLink {
  displayName: string;
  url: string;
  type: string;
}

const Footer: React.FC<FooterProps> = (props) => {
  const location = useLocation();
  // const [navlinksToShow, setNavlinksToShow] = useState<NavLink[]>([]);

  const { formData, handleChange, resetForm } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [btnDisabled, setButtonDisabled] = useState(true);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });

  //   // Check if any values in formData are empty
  //   const anyValuesEmpty = Object.values(formData).some(
  //     (value) => value === ""
  //   );

  //   // Set button disabled state based on the condition
  //   setButtonDisabled(anyValuesEmpty);
  // };

  // const resetFormData = () => {
  //   setFormData({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phoneNumber: "",
  //   });
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO: Add your form submission logic here
    console.log("Form submitted:", formData);

    resetForm();
  };

  const partners = [Partner1, Partner2, Partner3, Partner4, Partner5];

  const extraInfos = [
    {
      displayName: "Realtors",
      url: "",
    },
    {
      displayName: "Property Manager",
      url: "",
    },
    {
      displayName: "Request Tour",
      url: "",
    },
    {
      displayName: "Partnerships",
      url: "",
    },
  ];

  const navlinksToShow = [
    {
      displayName: "Rent",
      url: "/questionnaire/qna?type=rent&step=2",
    },
    {
      displayName: "Buy",
      url: "/questionnaire/qna?type=buy&step=2",
    },
    {
      displayName: "Home Tours",
      url: "/home-tour",
    },
    {
      displayName: "Contact us",
      url: "/contact-us",
    },
  ];

  // useEffect(() => {
  //   const firstPart = location.pathname.split("/")[1];

  //   // displays the navigations URLs except the current path
  //   const navlinks = navigationURLs.filter((ele) => {
  //     if (firstPart === "") return ele.url !== "/";
  //     else return ele.url.replace("/", "") !== firstPart;
  //   });

  //   setNavlinksToShow(navlinks.filter((ele) => ele.displayName !== "Shop"));
  // }, [location]);

  return (
    <>
      <section className="footer-section">
        <div className="contact">
          <div className="info">
            <SocialIcon />
            <div className="details">
              <div className="navs">
                {navlinksToShow?.map((nav, index) => (
                  <Link to={nav.url} key={index}>
                    <span>{nav.displayName}</span>
                  </Link>
                ))}
              </div>
              <div className="external-links navs">
                {extraInfos?.map((ele, index) => (
                  <Link to={ele.url} key={index}>
                    <span>{ele.displayName}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="connect-form">
            <h1>Connect with your Home Girl!</h1>
            <p>
              Join the Finding Floridians community for all ​adventures with
              your Home Girl.
            </p>

            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number*"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <button
                className="btn-primary"
                type="submit"
                // disabled={btnDisabled}
                // style={{ opacity: btnDisabled ? 0.5 : 1 }}
              >
                Contact Me!
              </button>
            </form>
            <p style={{ fontSize: "15px" }}>*required fields</p>
          </div>
        </div>

        <hr />
        <div className={`partners-section`}>
          <div className="container">
            <h3>Partners</h3>
            <div className="image-items">
              {partners?.map((PartnerIcons, index) => (
                <div className="item-container" key={index}>
                  {" "}
                  <div className="item">
                    <PartnerIcons />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="footer-banner">
        <p> copyright @Finding Floridians</p>
      </div>
    </>
  );
};

export default Footer;
