import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { CloseIcon } from "../../assets/svg";
import { useUserModal } from "../../hooks/useUserModal";

interface LogInProps {
  // Add your component's props here
}

const LogIn: React.FC<LogInProps> = () => {
  const { isModalOpen : isOpen, onClose, changeComponentType } =
    useUserModal();

  const { formData, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //TODO: Add your form submission logic here
    console.log("Form submitted:", formData);
    resetForm();
  };

  return (
    <section
      className="user-login"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="container-box">
        <div className="close-btn">
          <CloseIcon onClick={onClose} />
        </div>
        <div className="content">
          <h1>Talk with your home girl</h1>
          <h5>Please log in with your customer account to continue.</h5>
          <p>
            If you received a quote by email, you can view your quote by
            creating an account or logging-in with an existing account below.
          </p>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email:"
              name="email"
              onChange={handleChange}
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Password:"
              name="password"
              onChange={handleChange}
              autoComplete="off"
            />
            <div className="forgotpwd">
              <Link to={"/forgot-password"}>Forgot Password?</Link>
            </div>

            <div className="btns">
              <button className="btn-primary" type="submit">
                LOGIN
              </button>
              <span>
                New User? <span onClick={() => changeComponentType('sign-up')} className="pointer sign-up-btn">SignUp</span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogIn;