import React from "react";

interface TextInputProps {
  // Add your component's props here
  inputValue: string;
  handleInputValueChange: any;
  currentQna: any;
  label: string
}


const TextInput: React.FC<TextInputProps> = ({
  inputValue,
  handleInputValueChange,
  currentQna,
  label
}) => {
    
  return (
    <div className="text-input">
      <input
        type="text"
        // value={inputValue[currentQna?.step]}
        // onChange={(e) =>
        //   handleInputValueChange(currentQna?.step, "abc", e.target.value)
        // }
        placeholder={label}
        required
      />
    </div>
  );
};

export default TextInput;
