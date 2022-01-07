import React from "react";

import Header from "../../components/Header/index";
import Button from "../../components/Button/index";
import InputForm from "../../components/InputForm/index";
import LinkForm from "../../components/LinkForm/index";

import Form from "../../styles/form";

import { useAuth } from "../../providers/AuthProvider";

const Login = () => {

  const { handleLogin, buttonChildren } = useAuth();

  return (
    <>
      <Header />

      <main>
        <Form name="login">
          <InputForm type="email" placeholder="Email" name="email" />
          <InputForm type="password" placeholder="Senha" name="password" />

          <Button onClick={() => handleLogin()}>{buttonChildren}</Button>

          <LinkForm link="/register">
            Ainda não tem um cadastro?
          </LinkForm>
          
          <LinkForm link="/forget-password">
            Esqueceu sua senha?
          </LinkForm>
        </Form>
      </main>
    </>
  );
};

export default Login;
