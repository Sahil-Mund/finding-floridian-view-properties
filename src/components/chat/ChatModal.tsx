import React, { ReactEventHandler, useEffect, useRef, useState } from "react";
import { chatDetails } from "../../assets/constansts";
import { EmojiKeyboard } from "reactjs-emoji-keyboard";

import { CloseIcon, EmojiIcon, SubmitArrowIcon } from "../../assets/svg";
import { getAIRepsonse } from "../../backend";

interface ChatModalProps {
  isOpen: boolean;
  handleModalOpen: any;
}

const Typing: React.FC = () => (
  <div className="typing">
    <div className="para">
      <p>typing</p>
    </div>
    <div className="dots">
      <div className="typing__dot"></div>
      <div className="typing__dot"></div>
      <div className="typing__dot"></div>
    </div>
  </div>
);

const ChatModal: React.FC<ChatModalProps> = ({ isOpen, handleModalOpen }) => {
  const botAvatar =
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/90f5ed50-d297-4ed2-a29f-86c80c996f81.png";
  const userAvatar =
    "https://s3.ap-south-1.amazonaws.com/cdn.ghc.health/bd6de4e9-86b6-4035-862b-b232569a4813.png";

  const [inputText, setInputText] = useState<string>("");
  const [chats, setChats] = useState<any>(chatDetails);
  const [showEmojiKeyboard, setShowEmojiKeyboard] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState("");
  const [botTyping, seBotTyping] = useState<any>();

  const messageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Scroll down when messages change
    scrollToBottom();
  }, [chats, isOpen]);

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US");
    setCurrentDate(formattedDate);
  }, []);

  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      // Scroll to the bottom of the container
      messageContainerRef.current.style.scrollBehavior = "smooth";

      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };

  const handleChatSubmit = async () => {
    if (!inputText) return;

    const userMsg = {
      seq: 10,
      bot: false,
      message: inputText,
    };

    setChats((prev: any) => [...prev, userMsg]);
    seBotTyping(true);
    setInputText((prev) => "");

    const reply = await getAIRepsonse(inputText);
    seBotTyping(false);

    const botMsg = {
      seq: 11,
      bot: true,
      message:
        reply && reply.STATUS === 'SUCCESS'
          ? reply.DATA
          : "Facing some connectivity issue, We're trying to connect you with the AI !!",
    };

    setChats((prev: any) => [...prev, botMsg]);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleChatSubmit();
    }
  };

  const handleEmojiSelection = (emoji: any) => {
    setInputText((prev) => prev + emoji);
  };
  return (
    <div className="chat-modal" style={{ display: isOpen ? "block" : "none" }}>
      <div className="modal-container">
        <div className="date-container">
          <p>{currentDate}</p>
          <div className="close-modal">
            <CloseIcon
              onClick={() => handleModalOpen(false)}
              className="pointer"
            />
          </div>
        </div>
        <hr />
        <div className="chatbox" ref={messageContainerRef}>
          {chats?.map((msg: any, index: number) => (
            <div
              className={`chat-container ${
                msg.bot ? "align-left" : "align-right"
              }`}
              key={`msg-${index}`}
            >
              <div className="message">
                <p
                  dangerouslySetInnerHTML={{
                    __html: msg.message.replace(/\n/g, "<br>"),
                  }}
                ></p>

                {/* <p dangerouslySetInnerHTML={_html: msg.message}>{msg.message}</p> */}
              </div>
              <div className="user-icon">
                <img src={msg.bot ? botAvatar : userAvatar} alt="avatar-icon" />
              </div>
            </div>
          ))}

          {botTyping && (
            <>
              <div className="chat-container align-left" key={`msg`}>
                <div className="message typing-msg">
                  <Typing />
                </div>
                <div className="user-icon">
                  <img src={botAvatar} alt="avatar-icon" />
                </div>
              </div>{" "}
            </>
          )}
        </div>
        <hr />
        <div className="bottom-container">
          <div className="form">
            <div className="left">
              {showEmojiKeyboard ? (
                <span
                  className="emoji-close-btn pointer"
                  onClick={() => setShowEmojiKeyboard((prev) => !prev)}
                >
                  X
                </span>
              ) : (
                <EmojiIcon
                  onClick={() => setShowEmojiKeyboard((prev) => !prev)}
                  className="pointer"
                />
              )}

              {showEmojiKeyboard && (
                <div className="emoji-picker">
                  <EmojiKeyboard
                    height={320}
                    width={350}
                    theme="light"
                    searchLabel="Search For Emojis"
                    searchDisabled={false}
                    onEmojiSelect={(emoji) =>
                      handleEmojiSelection(emoji.character)
                    }
                    categoryDisabled={false}
                  />
                </div>
              )}
              <input
                placeholder="Start typing..."
                value={inputText}
                name="message"
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                type="text"
              />
            </div>
            <button
              type="submit"
              style={{ border: "none", outline: "none" }}
              onClick={handleChatSubmit}
            >
              {" "}
              <SubmitArrowIcon style={{ width: "32px" }} className="pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
