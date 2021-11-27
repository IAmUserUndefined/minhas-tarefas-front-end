import React from "react";

import { LinkFormStyle } from "./styles";

const LinkForm = ({ children, onClick }) => {
  return (
    <>
      <LinkFormStyle onClick={onClick}>{children}</LinkFormStyle>
    </>
  );
};

export default LinkForm;
