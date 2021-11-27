import React from "react";

import { InputForm } from "./styles";

const Input = ({ type, placeholder, name }) => {
  return (
    <>
      <InputForm type={type} placeholder={placeholder} name={name} />
    </>
  );
};

export default Input;
