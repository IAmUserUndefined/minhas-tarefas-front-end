import React from "react";

import { InputForm } from "./styles";

const Input = ({ formValues, setFormValues, type, placeholder, name }) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <>
      <InputForm 
        type={type}
        placeholder={placeholder} 
        name={name} 
        onChange={handleInputChange} 
        value={formValues[name] || ""}
        required
      />
    </>
  );
};

export default Input;
