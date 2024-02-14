import React, { useState } from "react";

interface SubQuestionsProps {
  // Add your component's props here
  subQues: any;
  onAccesoryChanges: (data: any) => void;
  accesories: {
    num_of_bedroom: string;
    num_of_bathroom: string;
    is_exact_match: boolean;
  };
}

const SubQuestions: React.FC<SubQuestionsProps> = ({
  subQues,
  onAccesoryChanges,
  accesories,
}) => {
  const [bathIdx, setBathIdx] = useState(0);
  const [bedIdx, setBedIdx] = useState(0);

  console.log(subQues);
  
  const handleCheckboxOptionSelect = (
    qNumber: string,
    option: string,
    index: number
  ) => {
    if (Number(qNumber) === 1) {
      onAccesoryChanges((prev: any) => {
        return {
          ...prev,
          num_of_bedroom: option,
        };
      });
      setBedIdx(index);
    } else if (Number(qNumber) === 2) {
      onAccesoryChanges((prev: any) => {
        return {
          ...prev,
          num_of_bathroom: option,
        };
      });
      setBathIdx(index);
    }
  };

  const handleCheckboxChange = (e: any) => {
    onAccesoryChanges((prev: any) => {
      return {
        ...prev,
        is_exact_match: e.target.checked,
      };
    });
  };
  return (
    <>
      <div className="sub-question-container">
        {subQues.map((ele: any, parentIdx: number) => (
          <div className="flex">
            <div
              className="sub-question"
              key={`sub-question-${ele?.qNumber}-parentIdx`}
            >
              {ele?.question}
            </div>
            <div className="sub-options">
              {ele?.options.map((opt: string, index: number) => (
                <div
                  className={`option-item ques-${ele.qNumber}-opt-${index}`}
                  key={index}
                  style={{
                    background:
                      (+ele.qNumber === 1 && index === bedIdx)|| (+ele.qNumber === 2 && index === bathIdx)
                        ? "#fffaf3"
                        : "",
                        border:
                        (+ele.qNumber === 1 && index === bedIdx)|| (+ele.qNumber === 2 && index === bathIdx)
                          ? "2px solid #000"
                          : "",
                  }}
                >
                  <span
                    onClick={() =>
                      handleCheckboxOptionSelect(ele.qNumber, opt, index)
                    }
                  
                  >
                    {opt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="checkbox match">
        <input
          type="checkbox"
          name="is-exact-match"
          onChange={handleCheckboxChange}
        />
        <span>Use Exact Match</span>
      </div>
    </>
  );
};

export default SubQuestions;
