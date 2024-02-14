import { useState } from "react";

export const useForm = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);
  // const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  // const markAsSubmitted = () => {
  //   setIsSubmitted(true);
  // };


  return { formData, handleChange, resetForm };
};

