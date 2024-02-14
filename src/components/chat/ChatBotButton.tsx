import React, { useState } from "react";
import "../../styles/chatbot.scss";
import ChatModal from "./ChatModal";
import CommonModal from "../modal/CommonModal";

interface ChatBotButtonProps {
  // Add your component's props here
}

const ChatBotButton: React.FC<ChatBotButtonProps> = (props) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // const chatIcon =
  //   "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/428689c9-f4ae-4a7e-a616-ae3e24f4825b.png";
  const happyBotIcon =
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/35f63159-1435-4c72-b3c0-249739944ce3.png";
  const sadBotIcon =
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/5dcd0d57-5b7f-40c2-8088-d4b8948ef6d4.png";

  const shockBotIcon =
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/04adb278-fdca-46b2-a5f0-14c6d6198d9f.png";

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        className="chatbot-btn"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={handleModalOpen}
      >
        <div className="bot-overlay">
          <div className="bot-image">
            <img
              src={isOpen ? happyBotIcon : isHover ? shockBotIcon : sadBotIcon}
              width={isHover ? 204 : 66}
              height={isHover ? 68 : 66}
              alt="chat-icon"
            />
          </div>
          {isHover && !isOpen && (
            <div className="hovered-content">
              <span>Try Me Out,</span>
              <span>I am your mini home girl</span>
            </div>
          )}
        </div>
      </div>

      <CommonModal isOpen={isOpen} onClose={closeModal}>
        <ChatModal isOpen={isOpen} handleModalOpen={setIsOpen} />
      </CommonModal>
    </>
  );
};

export default ChatBotButton;
