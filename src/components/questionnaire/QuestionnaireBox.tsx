import React from "react";
import { useNavigate } from "react-router-dom";

interface QuestionnaireBoxProps {
  // Add your component's props here
}

const QuestionnaireBox: React.FC<QuestionnaireBoxProps> = (props) => {
  const navigate = useNavigate();
  const handleClick = (type: string) => {
    navigate(`/questionnaire/qna?type=${type}`);
    // navigate(`/${type}-questionnaire`)
  };
  return (
    <div className="box-container">
      <h2>
        <span style={{ fontFamily: "Montserrat-Regular" }} className="light">
          {" "}
          Tell me about your preferences,
        </span>{" "}
        <span style={{ fontFamily: "Montserrat-Regular" }} className="semibold">
          & I'll help you find the Perfect Home
        </span>
      </h2>

      <button className="btn-primary" onClick={() => handleClick("buy")}>
        {" "}
        I want to buy a home{" "}
      </button>
      <button className="btn-primary" onClick={() => handleClick("rent")}>
        {" "}
        I want to rent a home{" "}
      </button>
    </div>
  );
};

export default QuestionnaireBox;
