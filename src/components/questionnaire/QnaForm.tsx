import React from "react";
import Rating from "./Rating";
import SubQuestions from "./SubQuestions";

interface Question {
  step: string;
  question: string;
  options: string[];
  answerType?: string;
  subquestions?: any;
}

interface QNAFormProps {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
  currentQna: Question | undefined;
  isOtherChecked: boolean;
  userOtherInput: string;
  setRating: (rate: number) => void;
  handleCheckboxOptionSelect: (selectedOption: string) => void;
  handleRadioOptionSelect: (selectedOption: string) => void;
  // renderChecked: (currentQna: Question, ele: string) => boolean | undefined;
  setUserOtherInput: (input: string) => void;
  CHECKBOX_INPUT_TOGGLE: string;
  onAccesoryChanges: (data: any) => void;
 accesories: {
    num_of_bedroom: string;
    num_of_bathroom: string;
    is_exact_match: boolean;
  };
}

const QNAForm: React.FC<QNAFormProps> = ({
  handleSubmit,
  currentQna,
  isOtherChecked,
  setRating,
  userOtherInput,
  handleCheckboxOptionSelect,
  handleRadioOptionSelect,
  // renderChecked,
  setUserOtherInput,
  CHECKBOX_INPUT_TOGGLE,
  onAccesoryChanges,
  accesories,
}) => {
  const { subquestions } =
    currentQna?.step === "2" ? currentQna : { subquestions: "" };

  return (
    <form
      className="qna-box"
      onSubmit={handleSubmit}
      key={`form-${currentQna?.step}`}
    >
      <div className="question" key={`question-${currentQna?.step}`}>
        {currentQna?.question}
      </div>
      <div className="options">
        {currentQna?.options.map((ele: string, index: number) => (
          <>
            {currentQna.answerType === "rating" ? (
              <div className="option-rating-item" key={index}>
                <span>{ele}</span>
                <Rating
                  uniqueKey={index}
                  maxRating={5}
                  onRatingChange={setRating}
                  qna={currentQna}
                />
              </div>
            ) : (
              <div className="option-item" key={index}>
                {currentQna?.answerType === "checkbox" ? (
                  <>
                    {currentQna?.answerType === "checkbox" &&
                    ele === CHECKBOX_INPUT_TOGGLE ? (
                      <>
                        {isOtherChecked ? (
                          <input
                            type="text"
                            value={userOtherInput}
                            onChange={(e) => setUserOtherInput(e.target.value)}
                            className="other-user-input"
                            placeholder="(Please Specify)"
                          />
                        ) : (
                          <>
                            <input
                              type={currentQna?.answerType}
                              onChange={() => handleCheckboxOptionSelect(ele)}
                              // checked={renderChecked(currentQna, ele)}
                              // checked={(
                              //   formData![currentQna?.step]?.options || []
                              // ).includes(ele)}
                            />
                            <span>{ele}</span>
                          </>
                        )}
                      </>
                    ) : (
                      <input
                        type={currentQna?.answerType}
                        onChange={() => handleCheckboxOptionSelect(ele)}
                        // checked={renderChecked(currentQna, ele)}
                        // checked={(
                        //   formData![currentQna?.step]?.options || []
                        // ).includes(ele)}
                      />
                    )}
                  </>
                ) : (
                  <input
                    type={currentQna?.answerType}
                    onChange={() => handleRadioOptionSelect(ele)}
                    name={`radio-input-${currentQna?.step}`}
                    // checked={formData![currentQna?.step]?.options === ele}
                    // checked={renderChecked(currentQna, ele)}
                  />
                )}
                {ele !== CHECKBOX_INPUT_TOGGLE && <span>{ele}</span>}
              </div>
            )}
          </>
        ))}
      </div>

      {subquestions && (
        <SubQuestions
          subQues={subquestions}
          onAccesoryChanges={onAccesoryChanges}
          accesories={accesories}
        />
      )}
    </form>
  );
};

export default QNAForm;
