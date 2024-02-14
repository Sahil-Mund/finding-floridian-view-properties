import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { NextArrowIcon, PreviousArrowIcon } from "../../../assets/svg";
import { ColorRing } from "react-loader-spinner";
import QNAForm from "../../questionnaire/QnaForm";

import { newPropertyquestionnaire } from "../../../assets/constansts";
import PropertyQnaForm from "./PropertyQnaForm";

interface NewPropertyPostProps {
  // Add your component's props here
}

interface Question {
  step: string;
  question: string;
  answerType: string;
  options?: string[];
  subquestions?: any[];
}

interface RadioFormData {
  [key: string]: { question: string | undefined; options: string | undefined };
}
interface CheckboxFormData {
  [key: string]: {
    question: string | undefined;
    options: string[] | undefined;
  };
}

type ContainerHeightSize = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
};

const NewPropertyPost: React.FC<NewPropertyPostProps> = (props) => {
  const containerHeightSize: ContainerHeightSize = {
    "0": "70",
    "1": "75",
    "2": "120",
    "3": "110",
    "4": "95",
    "5": "95",
    "6": "90",
    "7": "90",
    "8": "120",
  };

  const InitialQuestion = {
    step: "0",
    question: "What type of property are you planning to post?",
    answerType: "radio",
    options: ["For Rent", "For Sell"],
  };

  type InputState = {
    1: { mlsNumber: string };
    2: {
      propertyName: string;
      propertyDesc: string;
      Price: string;
      numOfPersons: number;
    };
    3: { numOfBedrooms: number; numofBathRooms: number };
    // Add more steps as needed
  };

  const initialInputState: InputState = {
    1: { mlsNumber: "" },
    2: { propertyName: "", propertyDesc: "", Price: "", numOfPersons: 0 },
    3: { numOfBedrooms: 0, numofBathRooms: 0 },
    // Add more steps as needed
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [currentQna, setCurrentQna] = useState<Question | undefined>(
    InitialQuestion
  );
  const [maxStep, setMaxStep] = useState<number>(6);
  // const [containerHeight, setcontainerHeight] = useState<number>();
  const [formData, setFormData] = useState<
    RadioFormData | CheckboxFormData | undefined
  >({});
  const [loaderVisible, setLoaderVisible] = useState(false);

  const [rating, setRating] = useState<any>(0);
  const [propertyType, setPropertyType] = useState<"buy" | "rent" | null>(null);
  const [inputValue, setInputValue] = useState<any>(initialInputState);

  const handleInputChange = (
    step: string,
    fieldName: string,
    value: string | number
  ) => {
    setInputValue((prevInputStates: any) => ({
      ...prevInputStates,
      [step]: {
        ...prevInputStates[step],
        [fieldName]: value,
      },
    }));
  };

  useEffect(() => {
    if (propertyType) {
      //when property type is blank, show the initialQues

      const data = newPropertyquestionnaire.find(
        (ele) => ele.type === propertyType.split(" ")[1].toLowerCase()
      );

      if (data) {
        setMaxStep(data?.qna?.length);
      }

      const qnaData = data?.qna.find(
        (ele: { step: string }) => Number(ele.step) === currentStep
      ) as Question | undefined;

      if (qnaData) {
        setCurrentQna(qnaData);
      }
    }
    // setcontainerHeight(currentQna?.answerType === "rating" ? 80 :75);
  }, [propertyType, currentStep]);

  const handleRadioOptionSelect = (selectedOption: string) => {
    if (currentStep === 0) {
      setPropertyType(selectedOption as "buy" | "rent");
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [currentQna?.step || ""]: {
        question: currentQna?.question,
        options: selectedOption,
      },
    }));
  };

  const handleCheckboxOptionSelect = (selectedOption: string) => {
    setFormData((prevData: any) => {
      const currentStepData = prevData![currentQna?.step || ""];

      // Check if the selected option is already in the array
      const optionIndex = currentStepData?.options?.indexOf(selectedOption);

      if (currentStepData?.options && optionIndex !== -1) {
        // If the option is already present, remove it
        const updatedOptions = (currentStepData?.options as string[]).filter(
          (option: any, index: any) => index !== optionIndex
        );

        return {
          ...prevData,
          [currentQna?.step || ""]: {
            question: currentQna?.question,
            options: updatedOptions,
          },
        };
      } else {
        // If the option is not present, add it
        return {
          ...prevData,
          [currentQna?.step || ""]: {
            question: currentQna?.question,
            options: [
              ...(currentStepData?.options || []),
              selectedOption, // Add the newly selected option
            ],
          },
        };
      }
    });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const data = { ...formData, 4: rating[4] };

    // Show loader for 5 seconds
    setLoaderVisible(true);
    setTimeout(() => {
      setLoaderVisible(false);

      // Route to the home page
    }, 5000);

    // TODO: Add your form submission logic here
    console.log("Form submitted:", data);

    // localStorage.clear();
    // localStorage.setItem(`${type}-response`, JSON.stringify(data));
  };

  const renderPrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const renderNextStep = () => {
    if (currentStep !== 0) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setCurrentStep(1);
    }
  };

  return (
    <section className="newPost-stepper">
      <div
        className="box-container"
        style={{
          height: `${
            containerHeightSize[currentStep as keyof ContainerHeightSize]
          }vh`,
        }}
      >
        <div className="heading">
          <h2>Home Details Upload</h2>
          <p>
            Personalize Your Property Profile |&nbsp;
            {propertyType
              ? `You are currently ${propertyType
                  .split(" ")[1]
                  .toLowerCase()}ing your property`
              : ""}
          </p>
        </div>
        {propertyType && (
          <>
            <div className="steps-count">
              {currentStep + 1}/{maxStep + 1}
            </div>
            <ProgressBar
              completed={(100 / maxStep) * currentStep}
              customLabel=""
              maxCompleted={100}
              isLabelVisible={false}
              bgColor="#6A704C"
            />
          </>
        )}
        {currentQna && (
          <PropertyQnaForm
            handleSubmit={handleSubmit}
            currentQna={currentQna}
            setRating={setRating}
            handleCheckboxOptionSelect={handleCheckboxOptionSelect}
            handleRadioOptionSelect={handleRadioOptionSelect}
            handleInputValueChange={handleInputChange}
            inputValue={inputValue}
          />
        )}
        {propertyType && (
          <div
            className="btns"
            style={{
              justifyContent: currentStep <= 1 ? "flex-end" : "space-between",
            }}
          >
            {currentStep > 1 && (
              <span onClick={renderPrevStep}>
                <PreviousArrowIcon />
              </span>
            )}

            {maxStep === currentStep ? (
              <>
                {loaderVisible ? (
                  <button
                    className="btn-primary submit-loader"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    <ColorRing
                      visible={true}
                      height="80"
                      width="49"
                      ariaLabel="color-ring-loading"
                      wrapperStyle={{}}
                      wrapperClass="color-ring-wrapper"
                      colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                    />
                    Processing...
                  </button>
                ) : (
                  <button
                    className="btn-primary"
                    onClick={handleSubmit}
                    type="submit"
                  >
                    Add Property
                  </button>
                )}
              </>
            ) : (
              <button
                onClick={renderNextStep}
                className="btn-next"
                type="button"
              >
                <span>NEXT</span>
                <NextArrowIcon />
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewPropertyPost;
