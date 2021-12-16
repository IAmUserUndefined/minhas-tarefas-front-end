import React from "react";
import { useNavigate } from "react-router";

import Header from "../Header/index";
import Button from "../Button/index";

import {
  ContainerHeaderLogin,
  ContainerHeaderLoginButton,
  ContainerHeaderTitle,
} from "./styles";

import { useAuth } from "../../providers/AuthProvider";

const HeaderLogin = ({ link, children }) => {
  const navigate = useNavigate();

  const handleLink = (link) => {
    navigate(link);
  };

  const { handleLogout } = useAuth();

  return (
    <ContainerHeaderLogin>
      <ContainerHeaderTitle>
        <Header />
      </ContainerHeaderTitle>

      <ContainerHeaderLoginButton>
        <Button onClick={() => handleLink(link)}>{children}</Button>

        <Button onClick={() => handleLogout()}>Sair</Button>
      </ContainerHeaderLoginButton>
    </ContainerHeaderLogin>
  );
};

export default HeaderLogin;
