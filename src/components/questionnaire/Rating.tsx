import React, { useState } from "react";
import "../../styles/elements/rating.scss"

interface RatingProps {
  maxRating: number;
  onRatingChange: any;
  qna: any;
  uniqueKey: number;

}

const Rating: React.FC<RatingProps> = ({
  maxRating,
  uniqueKey,
  onRatingChange,
  qna
}) => {
  const [dots, setDots] = useState<number>(0);
  const handleDotClick = (selectedRating: number, currentOption: string) => {
    console.log(selectedRating, currentOption);
    
    onRatingChange((prevData: any) => ({
      ...prevData,
      [qna?.step || ""]: {
        question: qna?.question || "",
        options: {
          ...(prevData[qna?.step || ""]?.options || {}),
          [currentOption || ""]: selectedRating,
        },
      },
    }));

    setDots(selectedRating);
  };

  return (
    <div className="rating-container" key={`uniqueKey-${Date.now()}`}>
      {[...Array(maxRating)].map((_, index) => (
        <>
          {index > 0 && <div key={`line-${index}`} className="line"></div>}
          <div
            key={index}
            className={`dot ${index + 1 === (dots || 0) ? "selected" : ""}`}
            onClick={() =>
              handleDotClick(
                index + 1,
                qna?.options && qna?.options[uniqueKey] ? qna.options[uniqueKey] : ""
              )
            }
          ></div>
        </>
      ))}
    </div>
  );
};

export default Rating;
