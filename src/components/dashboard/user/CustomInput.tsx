import React from "react";

interface CustomInputProps {
  answerType: "checkbox" | "radio" | "input" | undefined | string;
  onChangeHandle: (item: string) => any;
  item: string;
  currentQna?: any
}

const CustomInput: React.FC<CustomInputProps> = ({
  answerType,
  onChangeHandle,
  item,
  currentQna
}) => {
  return (
    <>
      <input
        type={answerType}
        name={`radio-input-${currentQna?.step}`}
        onChange={() => onChangeHandle(item)}
      />
      <span>{item}</span>
    </>
  );
};

export default CustomInput;
