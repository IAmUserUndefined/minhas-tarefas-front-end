import React from "react";
import { useNavigate } from "react-router";

import Header from "../../components/Header/index";
import Button from "../../components/Button/index";
import InputForm from "../../components/InputForm/index";
import LinkForm from "../../components/LinkForm/index";

import Form from "../../styles/form";

import { useAuth } from "../../providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();

  const handleLink = (link) => {
    navigate(link);
  };

  const { handleLogin, buttonChildren } = useAuth();

  return (
    <>
      <Header />

      <Form name="login">
        <InputForm type="email" placeholder="Email" name="email" />
        <InputForm type="password" placeholder="Senha" name="password" />

        <div>
          <Button onClick={handleLogin}>{buttonChildren}</Button>
        </div>

        <LinkForm onClick={() => handleLink("/register")}>
          Ainda não tem um cadastro?
        </LinkForm>
        <br />
        <LinkForm onClick={() => handleLink("/forget-password")}>
          Esqueceu sua senha?
        </LinkForm>
      </Form>
    </>
  );
};

export default Login;
