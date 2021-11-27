import React from "react";

import { ButtonStyle } from "./styles";

const Button = ({ children, onClick }) => {
  return (
    <ButtonStyle onClick={onClick} type="button">
      {children}
    </ButtonStyle>
  );
};

export default Button;
