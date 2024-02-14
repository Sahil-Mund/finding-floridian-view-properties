import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface ButtonModalProps {
  // Add your component's props here
}

const ButtonModal: React.FC<ButtonModalProps> = (props) => {
  const location = useLocation();
  const [type, setType] = useState<string | null>("");

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setType(queryParams.get("type"));
  }, [location.search]);

  return (
    <div className="modal-container">
      <div className="details">Not happy with the result?</div>
      <div className="btns">
        <Link to={`/questionnaire/qna?type=${type}`}>
          <button>Retake Quiz</button>
        </Link>
        {/* // TODO: Need to change the route later on  */}
        <Link to={`/questionnaire/qna?type=${type}`}>
          {" "}
          <button>Update Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default ButtonModal;
