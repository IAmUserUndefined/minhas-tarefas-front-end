import React from "react";
import { useNavigate } from "react-router-dom";

import { LinkFormStyle } from "./styles";

const LinkForm = ({ children, link }) => {
  const navigate = useNavigate();
  const handleLink = (link) => navigate(link)
  return (
    <>
      <div>
          <LinkFormStyle onClick={() => handleLink(link)}>{children}</LinkFormStyle>
      </div>
    </>
  );
};

export default LinkForm;