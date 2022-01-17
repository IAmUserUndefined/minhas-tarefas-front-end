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
  const [formValues, setFormValues] = useState({});

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    
    const { email } = e.target;

    if (!email.value) {
      return handleShowModal("Preencha o campo de email");
    }

    if (!isEmailValid(email.value)) {
      return handleShowModal("Coloque um email válido");
    }
    
    setButtonChildren(<LoadingGif />);

    await api
      .post("/user/password/send-token-password-recover", {
        email: email.value,
      })
      .then(({ data }) => {
        setFormValues({});
        handleShowModal(data.response);
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor, tente novamente mais tarde")
      );

    setButtonChildren("Enviar Email");
  };

  return (
    <>
      <Header />

      <main>
        <Form onSubmit={handleForgetPassword}>
          <InputForm type="email" placeholder="Email" name="email" formValues={formValues} setFormValues={setFormValues} />

          <Button type="submit">{buttonChildren}</Button>

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
