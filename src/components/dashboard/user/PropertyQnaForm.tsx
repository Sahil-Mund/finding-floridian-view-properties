import React, { useState } from "react";
import Rating from "../../questionnaire/Rating";
import CustomInput from "./CustomInput";
import TextInput from "./TextInput";
import SubQueries from "./SubQueries";

interface Question {
  step: string;
  question: string;
  options?: string[];
  answerType?: string;
  subquestions?: any;
}

interface PropertyQnaFormProps {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
  currentQna: Question | undefined;
  setRating: (rate: number) => void;
  handleCheckboxOptionSelect: (selectedOption: string) => void;
  handleRadioOptionSelect: (selectedOption: string) => void;
  handleInputValueChange: (
    step: string,
    fieldName: string,
    value: string | number
  ) => void;
  inputValue: any;
}

const PropertyQnaForm: React.FC<PropertyQnaFormProps> = ({
  handleSubmit,
  currentQna,
  setRating,
  handleInputValueChange,
  inputValue,
  handleCheckboxOptionSelect,
  handleRadioOptionSelect,
}) => {
  const [image, setImage] = useState(null);
  const subQueries = currentQna?.subquestions || [];

  const handleImageChange = (event: any) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);

    // Do additional tasks if needed, like uploading the image to a server
  };

  return (
    <form
      className="qna-box"
      onSubmit={handleSubmit}
      key={`form-${currentQna?.step}`}
    >
      <div className="question" key={`question-${currentQna?.step}`}>
        {currentQna?.question}
      </div>
      <div
        className="options"
        style={{
          display: `${currentQna?.answerType === "rating" ? "grid" : ""}`,
        }}
      >
        {currentQna?.options?.map((ele: string, index: number) => (
          <div
            className="option-item"
            key={index}
            style={{
              flexBasis: currentQna?.answerType === "input" ? "100%" : "33.33%",
            }}
          >
            {currentQna?.answerType === "checkbox" ? (
              <CustomInput
                answerType={currentQna?.answerType}
                onChangeHandle={() => handleCheckboxOptionSelect(ele)}
                item={ele}
              />
            ) : currentQna?.answerType === "radio" ? (
              <CustomInput
                answerType={currentQna?.answerType}
                onChangeHandle={() => handleRadioOptionSelect(ele)}
                item={ele}
                currentQna={currentQna}
              />
            ) : currentQna?.answerType === "input" ? (
              <TextInput
                currentQna={currentQna}
                inputValue={inputValue}
                handleInputValueChange={handleInputValueChange}
                label={ele}
              />
            ) : currentQna?.answerType === "rating" ? (
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
              // image-upload
              <div className="option-image-item" key={index}>
                <div>{ele}</div>
                <div className="circular-image-upload" key={index}>
                  <label htmlFor="imageUpload" className="plus-icon">
                    +
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    id="imageUpload"
                  />
                </div>

                {image && (
                  <div>
                    <p>Preview:</p>
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Uploaded Preview"
                      width={"200px"}
                      height={"200px"}
                    />
                  </div>
                )}

                {/* <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />

                {image && (
                  <div>
                    <p>Preview:</p>
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Uploaded Preview"
                      width={"200px"}
                      height={"200px"}
                    />
                  </div>
                )} */}
              </div>
            )}
          </div>
        ))}
      </div>

      {subQueries && <SubQueries subQues={subQueries} />}
    </form>
  );
};

export default PropertyQnaForm;
