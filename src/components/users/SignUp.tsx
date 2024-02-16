import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { CloseIcon } from "../../assets/svg";
import { useUserModal } from "../../hooks/useUserModal";
import { TERMS_PDF_URL } from "assets/data";
import { toast } from "react-toastify";
import { sendFormSparkMail, submitUserDetailsForm } from "backend";
import { FORMS_SPARK } from "api";
import axios from "axios";

// interface SignUpProps {
//   // Add your component's props here
// }

const SignUp: React.FC = () => {
  const { formData, handleChange, resetForm } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [isAccept, setIsAccept] = useState(false);

  const navigate = useNavigate();

  const { isModalOpen: isOpen, onClose, changeComponentType } = useUserModal();

  // const { onClose, changeComponentType } = useUserModal();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO : Add a validation to throw error
    if (!isAccept) return;

    //TODO: Add your form submission logic here
    const data = await sendFormSparkMail(formData);

    localStorage.setItem("IS_CONTACT_FORM_SUBMITTED", JSON.stringify(true));
    resetForm();

    // const res = await submitUserDetailsForm(formData as any);
    // if (!res.STATUS) {
    //   toast.error(res.message);
    //   return;
    // }

    toast.success("Your details submitted successfully");

    setTimeout(() => {
      onClose();
      navigate("/");
      window.location.reload();
    }, 1000);
  };

  return (
    <section
      className="user-registration"
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="container-box">
        <div className="close-btn">
          <CloseIcon onClick={onClose} />
        </div>
        <div className="content">
          <h1>Unlock Your Properties</h1>
          <h5>Please fill out the info below to unlock.</h5>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name:"
              name="firstName"
              value={formData.firstName}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              placeholder="Last Name:"
              name="lastName"
              value={formData.lastName}
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
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <div>
              <input
                type="checkbox"
                onChange={(e) => setIsAccept(e.target.checked)}
                required
              />
              <span>
                {/* <iframe src={"https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/2691077b-6e35-484e-be5b-457ee6dd8429_User%20Terms%20and%20Conditions.pdf"}></iframe> */}
                <Link to={"/user-terms-and-conditions"} target="_blank">
                  <p> Terms and Conditions</p>
                </Link>

                <p> I agree to the Terms and Conditions.</p>
              </span>
            </div>
            <div className="btns">
              <button className="btn-primary" type="submit">
                UNLOCK
              </button>
              {/* <span>
                Existing User? <span onClick={() => changeComponentType('login')} className="pointer sign-up-btn">LogIn</span>
              </span> */}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
