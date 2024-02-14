import React, { useState } from "react";
// ! Not being used

interface InstaPostProps {
  // Add your component's props here
  recentPosts: any[];
  //TODO: add appropriate type
}

const InstaPost: React.FC<InstaPostProps> = ({ recentPosts }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
  });

  const [btnDisabled, setButtonDisabled] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  // Check if any values in formData are empty
  const anyValuesEmpty = Object.values(formData).some(
    (value) => value === ""
  );

  // Set button disabled state based on the condition
  setButtonDisabled(anyValuesEmpty);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //TODO: Add  form submission logic here
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      email: "",
      phoneNumber: "",
    });
  };
  return (
    <section className="insta-post-section">
      <div className="recent-posts">
        <div className="recent-posts-slider">
          {recentPosts?.map((ele, index) => (
            <img
              src={ele.image}
              alt={ele.heading}
              title={ele.caption}
              key={index}
            />
          ))}
        </div>
        <p>@findingfloridians</p>
      </div>
      <div className="connect-form">
        <h1>Connect with your Home Girl</h1>
        <p>
          Join the finding Floridians community to get all the latest updates,
          home tours, & your Home Girl adventures.
        </p>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <button className="btn-primary" type="submit" disabled={btnDisabled}
          style={{ opacity: btnDisabled ? 0.5 : 1}}>
            Contact
          </button>
        </form>
      </div>
    </section>
  );
};

export default InstaPost;
