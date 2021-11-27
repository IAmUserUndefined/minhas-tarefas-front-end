import React from "react";
import { useHistory } from "react-router";

import Header from "../Header/index";
import Button from "../Button/index";

import {
  ContainerHeaderLogin,
  ContainerHeaderLoginButton,
  ContainerHeaderTitle,
} from "./styles";

import { useAuth } from "../../providers/AuthProvider";

const HeaderLogin = ({ link, children }) => {
  const history = useHistory();

  const handleLink = (link) => {
    history.push(link);
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
