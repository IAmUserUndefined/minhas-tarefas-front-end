import React, { useState } from "react";
import { useNavigate } from "react-router";

import Header from "../../components/Header/index";
import Button from "../../components/Button/index";
import InputForm from "../../components/InputForm/index";
import LinkForm from "../../components/LinkForm/index";
import LoadingGif from "../../components/LoadingGif/index";

import Form from "../../styles/form";

import api from "../../services/api";

import isEmailValid from "../../utils/isEmailValid";

import { useModal } from "../../providers/ModalProvider";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [buttonChildren, setButtonChildren] = useState("Enviar Email");
  const { handleShowModal } = useModal();

  const handleLink = (link) => {
    navigate(link);
  };

  const handleForgetPassword = async () => {
    setButtonChildren(<LoadingGif />);

    const form = document.forms.forgetPassword;

    let { email } = form;

    if (!email.value) {
      setButtonChildren("Enviar Email");
      return handleShowModal("Preencha o campo de email");
    }

    if (!isEmailValid(email.value)) {
      setButtonChildren("Enviar Email");
      email.value = "";
      return handleShowModal("Coloque um email válido");
    }

    await api
      .post("/user/password/send-token-password-recover", {
        email: email.value,
      })
      .then(({ data }) => {
        handleShowModal(data.response);
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor")
      );

    email.value = "";

    setButtonChildren("Enviar Email");
  };

  return (
    <>
      <Header />
      <Form name="forgetPassword">
        <InputForm type="email" placeholder="Email" name="email" />

        <div>
          <Button onClick={handleForgetPassword}>{buttonChildren}</Button>
        </div>

        <LinkForm onClick={() => handleLink("/")}>Já tem um cadastro?</LinkForm>
        <br />
        <LinkForm onClick={() => handleLink("/register")}>
          Ainda não é cadastrado?
        </LinkForm>
      </Form>
    </>
  );
};

export default ForgetPassword;
