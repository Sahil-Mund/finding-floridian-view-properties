import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/signin-register.scss";
import { useForm } from "../hooks/useForm";
import { user_login } from "backend";
import { toast } from "react-toastify";
import { useAuth } from "hooks/useAuth";

interface LogInProps {
  // Add your component's props here
}

const LogIn: React.FC<LogInProps> = (props) => {
  const { formData, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const { setUserData, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleUserAccess = (resp: any) => {
    const { token, user } = resp.DATA;
    setUserData(user);
    setIsLoggedIn(true);
    sessionStorage.setItem("user_access_token", JSON.stringify(token));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //TODO: Add your form submission logic here
    try {
      const data = await user_login(formData);

      // console.log("Form new:", data.response.data);

      if (data?.response?.data && data?.response?.data?.STATUS === "FAILURE") {
        toast.error(data.response.data.MESSAGE as string);
        return;
      }

      if (data.STATUS && data.STATUS === "SUCCESS") {
        toast.success("Login successful!!");
        handleUserAccess(data);
        navigate("/");
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
    <section className="user-login">
      <div className="container-box">
        <div className="content">
          <h1>Talk with your home girl</h1>
          <h5>Please log in with your customer account to continue.</h5>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email:"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password:"
              value={formData.password}
              name="password"
              onChange={handleChange}
            />
            {/* <div className="forgotpwd">
              <Link to={"/forgot-password"}>Forgot Password?</Link>
            </div> */}

            <div className="btns">
              <button className="btn-primary" type="submit">
                LOGIN
              </button>
              <span>
                New User? <Link to={"/register"}>SignUp</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
