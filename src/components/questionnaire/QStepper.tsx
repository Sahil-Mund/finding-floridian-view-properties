import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { questionnaire } from "../../assets/constansts";
import { useLocation, useNavigate } from "react-router-dom";

import { ColorRing } from "react-loader-spinner";
import { NextArrowIcon, PreviousArrowIcon } from "../../assets/svg";
import QNAForm from "./QnaForm";

interface Question {
  step: string;
  question: string;
  options: string[];
  answerType?: string;
  subquestions?: any;
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
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
};

const QStepper: React.FC = () => {
  const CHECKBOX_INPUT_TOGGLE = "Other";

  const containerHeightSize: ContainerHeightSize = {
    "1": "85",
    "2": "115",
    "3": "85",
    "4": "105",
    "5": "95",
    "6": "95",
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [currentQna, setCurrentQna] = useState<Question>();
  const [maxStep, setMaxStep] = useState<number>(6);
  // const [containerHeight, setcontainerHeight] = useState<number>();
  const [formData, setFormData] = useState<
    RadioFormData | CheckboxFormData | undefined
  >({});
  const [loaderVisible, setLoaderVisible] = useState(false);

  const [rating, setRating] = useState<any>(0);
  const [isOtherChecked, setIsOtherChecked] = useState<boolean>(false);
  const [userOtherInput, setUserOtherInput] = useState<string>("");
  const [propertyAccessories, setPropertyAccessories] = useState<any>({
    num_of_bedroom: "",
    num_of_bathroom: "",
    is_extact_match: false,
  });

  // const [JSONlocalData, setJSONLocalData] = useState<
  //   RadioFormData | CheckboxFormData | undefined
  // >({});

  const location = useLocation();
  const navigate = useNavigate();

  const handleRadioOptionSelect = (selectedOption: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [currentQna?.step || ""]: {
        question: currentQna?.question,
        options: selectedOption,
      },
    }));
  };

  // const handleSubQuestionResponse = (selecte)

  const handleCheckboxOptionSelect = (selectedOption: string) => {
    if (selectedOption === CHECKBOX_INPUT_TOGGLE) {
      setIsOtherChecked(true);
    }

    if(currentStep === 2){
      // if step is 2, then update the number of bathrooms and bedrooms in the state
      setPropertyAccessories({
        num_of_bedroom: "",
        num_of_bathroom: "",
        is_extact_match: false,
      })
      
    }
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
    if (
      formData &&
      userOtherInput &&
      formData[2].options?.includes(CHECKBOX_INPUT_TOGGLE)
    ) {
      // If other is also selected, then let's add the userInput to the formData
      // (formData[2].options as string[]).push(userOtherInput);

      // Specify the index of 'Other' in the array --> handling step-2
      const indexOfOther = (formData[2].options as string[]).indexOf(
        CHECKBOX_INPUT_TOGGLE
      );

      // Check if 'Other' is found in the array
      if (indexOfOther !== -1) {
        // Replace 'Other' with the specified value
        (formData[2].options as string[]).splice(
          indexOfOther,
          1,
          userOtherInput
        );
      }
    }
    const data = { ...formData, 4: rating[4] };

    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type");

    // Show loader for 5 seconds
    setLoaderVisible(true);
    setTimeout(() => {
      setLoaderVisible(false);

      // Route to the home page
      navigate(`/recommendation?type=${type}`);
    }, 5000);

    // TODO: Add your form submission logic here
    console.log("Form submitted:", data);

    // localStorage.clear();
    // localStorage.setItem(`${type}-response`, JSON.stringify(data));
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const step = queryParams.get("step");

    if (step) {
      setCurrentStep(+step);
    }
    const newSearch = location.search.replace(/&step=2/g, "");
    navigate({
      pathname: location.pathname,
      search: newSearch,
    });
  }, [location.search, location.pathname, navigate]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type");

    if (type !== "buy" && type !== "rent") {
      navigate("/");
    }

    const data = questionnaire.find((ele) => ele.type === type);
    if (data) {
      setMaxStep(data?.qna?.length);
    }

    const qnaData = data?.qna?.find((ele) => Number(ele.step) === currentStep);
    if (qnaData) {
      setCurrentQna(qnaData);
    }

    // setcontainerHeight(currentQna?.answerType === "rating" ? 80 :75);
  }, [currentStep, location.search, navigate, currentQna]);

  // to fetch already present question ans from localstprage
  // useEffect(() => {
  //   if (true) {
  //     const localData =
  //       JSON.parse(localStorage.getItem("rent-response") as string) || [];
  //     // setFormData(localData);
  //     setJSONLocalData(localData);
  //   }
  // }, []);

  const renderPrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const renderNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // const renderChecked = (currentQna: Question, item: string) => {
  //   const isRequireLocalFetch = true;
  //   const data = isRequireLocalFetch ? JSONlocalData : formData;

  //   return (data![currentQna?.step]?.options || []).includes(item);
  // };

  return (
    <section className="qna-stepper">
      <div
        className="box-container"
        style={{
          height: `100%`,
        }}
        // style={{
        //   minHeight: `${
        //     containerHeightSize[currentStep as keyof ContainerHeightSize]
        //   }vh`,
        // }}
      >
        <div className="heading">
          <h2>Find Your Ideal Florida Home</h2>
          <p>Tell me about what you’re looking for in the perfect home.</p>
        </div>
        <div className="steps-count">{currentStep}/6</div>
        <ProgressBar
          completed={(100 / maxStep) * currentStep}
          customLabel=""
          maxCompleted={100}
          isLabelVisible={false}
          bgColor="#6A704C"
        />
        <QNAForm
          handleSubmit={handleSubmit}
          currentQna={currentQna}
          isOtherChecked={isOtherChecked}
          setRating={setRating}
          userOtherInput={userOtherInput}
          handleCheckboxOptionSelect={handleCheckboxOptionSelect}
          handleRadioOptionSelect={handleRadioOptionSelect}
          // renderChecked={renderChecked}
          setUserOtherInput={setUserOtherInput}
          CHECKBOX_INPUT_TOGGLE={CHECKBOX_INPUT_TOGGLE}
          onAccesoryChanges={setPropertyAccessories}
          accesories = {propertyAccessories}
        />
        <div
          className="btns"
          style={{
            justifyContent: currentStep === 1 ? "flex-end" : "space-between",
          }}
        >
          {currentStep !== 1 && (
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
                  Searching for you
                </button>
              ) : (
                <button
                  className="btn-primary"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Let's Start
                </button>
              )}
            </>
          ) : (
            <button onClick={renderNextStep} className="btn-next" type="button">
              <span>NEXT</span>
              <NextArrowIcon />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default QStepper;
