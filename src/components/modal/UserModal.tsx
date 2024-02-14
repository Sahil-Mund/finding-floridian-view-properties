import React, { CSSProperties, ReactNode, useState } from "react";
import { useUserModal } from "../../hooks/useUserModal";

interface UserModalProps {
  children: ReactNode;
}

const UserModal: React.FC<UserModalProps> = ({ children }) => {
  const { isModalOpen, onClose } = useUserModal();

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
      {children}
    </div>
  );
};

export default UserModal;
