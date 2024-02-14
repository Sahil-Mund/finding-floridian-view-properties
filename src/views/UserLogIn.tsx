import React, { CSSProperties } from "react";
import { LogIn, SignUp } from "../components";
import "../styles/signin-register.scss";
import { useUserModal } from "../hooks/useUserModal";

interface LogInPageProps {
  // Add your component's props here
}

const LogInPage: React.FC<LogInPageProps> = (props) => {
  const { componentType, isModalOpen, onClose } = useUserModal();
  const overlayStyle: CSSProperties = {
    display: isModalOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 999,
  };

  return (
    <div>
      <div style={overlayStyle} onClick={onClose}></div>
      {componentType === "" || componentType === "login" ? (
        <LogIn />
      ) : (
        <SignUp />
      )}{" "}
    </div>
  );
};

export default LogInPage;
