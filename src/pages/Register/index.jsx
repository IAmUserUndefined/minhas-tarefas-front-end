import React, { useState } from "react";

import Form from "../../styles/form";

import Header from "../../components/Header/index";
import Button from "../../components/Button/index";
import InputForm from "../../components/InputForm/index";
import LinkForm from "../../components/LinkForm/index";
import LoadingGif from "../../components/LoadingGif/index";

import api from "../../services/api";

import isEmailValid from "../../utils/isEmailValid";
import isPasswordValid from "../../utils/isPasswordValid";

import { useModal } from "../../providers/ModalProvider";

const Register = () => {
  const { handleShowModal } = useModal();
  const [buttonChildren, setButtonChildren] = useState("Cadastrar");

  const handleRegister = async () => {
    setButtonChildren(<LoadingGif />);

    const form = document.forms.register;

    let { email, password, passwordConfirm } = form;

    if (!email.value || !password.value || !passwordConfirm.value) {
      setButtonChildren("Cadastrar");
      return handleShowModal("Preencha todos os campos");
    }

    if (!isEmailValid(email.value)) {
      setButtonChildren("Cadastrar");
      email.value = "";
      return handleShowModal("Coloque um email válido");
    }

    const { result, message } = isPasswordValid(password.value);

    if (!result) {
      setButtonChildren("Cadastrar");
      return handleShowModal(message);
    }

    if (password.value !== passwordConfirm.value) {
      setButtonChildren("Cadastrar");
      password.value = "";
      passwordConfirm.value = "";
      return handleShowModal("As senhas não coincidem");
    }

    await api
      .post("/user/create", {
        email: email.value,
        password: password.value,
        passwordConfirm: passwordConfirm.value,
      })
      .then(({ data }) => {
        email.value = "";
        password.value = "";
        passwordConfirm.value = "";
        handleShowModal(data.response);
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor")
      );

    email.value = "";
    password.value = "";
    passwordConfirm.value = "";

    setButtonChildren("Cadastrar");
  };

  return (
    <>
      <Header />

      <main>
        <Form name="register">
          <InputForm 
            type="email" 
            placeholder="Email" 
            name="email" 
          />
          <InputForm 
            type="password" 
            placeholder="Senha" 
            name="password" 
          />
          <InputForm
            type="password"
            placeholder="Confirmação de Senha"
            name="passwordConfirm"
          />

          <Button onClick={handleRegister}>{buttonChildren}</Button>

          <LinkForm link="/">
            Já tem um cadastro?
          </LinkForm>

          <LinkForm link="/forget-password">
            Esqueceu sua senha?
          </LinkForm>
        </Form>
      </main>
    </>
  );
};

export default Register;
