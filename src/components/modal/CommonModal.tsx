import React, { CSSProperties, ReactNode } from "react";

interface CommonModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const CommonModal: React.FC<CommonModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const overlayStyle: CSSProperties = {
    display: isOpen ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 999,
  };

  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div>
      <div style={overlayStyle} onClick={onClose}></div>
      {children}
    </div>
  );
};

export default CommonModal;
