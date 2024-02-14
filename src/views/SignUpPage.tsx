import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThankYou } from "../components";
import "../styles/signin-register.scss";
import { useForm } from "../hooks/useForm";
import { user_singup } from "backend";
import { toast } from "react-toastify";
import { useAuth } from "hooks/useAuth";

// interface SignUpProps {
//   // Add your component's props here
// }

const SignUp: React.FC = () => {
  const { formData, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    passwordConfirmation: "",
  });

  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO : Add a validation to throw error
    if (formData.password !== formData.passwordConfirmation) {
      toast.error("Password do not match");
      return;
    }

    //TODO: Add your form submission logic here
    // console.log("Form submitted:", formData);
    try {
      const data = await user_singup({ ...formData, role: "USER" });

      console.log("data", data);
      if (data.STATUS && data.STATUS === "SUCCESS") {
        toast.success("Registered successfully, continue to Login");
        resetForm();
        return;
      }

      const errorObj = data.response.data.DATA;
      if (Array.isArray(errorObj)) {
        toast.error(errorObj[0].message);
      } else {
        toast.error(errorObj);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const authToken = JSON.parse(
      sessionStorage.getItem("user_access_token") as string
    );
    if (authToken) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <section className="user-registration">
      <div className="container-box">
        <div className="content">
          <h1>Create your account</h1>
          <h5>Please log in with your customer account to continue.</h5>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name:"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="email"
              placeholder="Email:"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Phone Number:"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password: (Create a Password)"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="passwordConfirmation"
              value={formData.passwordConfirmation}
              onChange={handleChange}
              placeholder="Confirm Password: (Create a Password)"
            />

            <div className="btns">
              <button className="btn-primary" type="submit">
                Signup
              </button>
              <span>
                Existing User? <Link to={"/"}>LogIn</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
