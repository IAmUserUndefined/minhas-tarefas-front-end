import React, { useState } from "react";

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
  const [buttonChildren, setButtonChildren] = useState("Enviar Email");
  const { handleShowModal } = useModal();

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

      <main>
        <Form name="forgetPassword">
          <InputForm type="email" placeholder="Email" name="email" />

          <Button onClick={handleForgetPassword}>{buttonChildren}</Button>

          <LinkForm link="/">
            Já tem um cadastro?
          </LinkForm>

          <LinkForm link="/register">
            Ainda não é cadastrado?
          </LinkForm>
        </Form>
      </main>
    </>
  );
};

export default ForgetPassword;
