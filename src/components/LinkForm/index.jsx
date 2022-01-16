import React from "react";
import { useNavigate } from "react-router-dom";

import { LinkFormStyle } from "./styles";

const LinkForm = ({ children, link }) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
          <LinkFormStyle onClick={() => navigate(link)}>{children}</LinkFormStyle>
      </div>
    </>
  );
};

export default LinkForm;