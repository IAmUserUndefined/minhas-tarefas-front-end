import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router";

import Header from "../../components/Header/index";
import Button from "../../components/Button/index";
import InputForm from "../../components/InputForm/index";
import LoadingGif from "../../components/LoadingGif/index";

import Form from "../../styles/form";

import api from "../../services/api";
import isPasswordValid from "../../utils/isPasswordValid";

import { useModal } from "../../providers/ModalProvider";

const RecoverPassword = ({ location }) => {
  const { handleShowModal } = useModal();
  const [buttonChildren, setButtonChildren] = useState("Atualizar Senha");
  const navigate = useNavigate();
  const { search } = useLocation();

  const handleLink = (link) => {
    navigate(link);
  };

  const handleRecoverPassword = async () => {
    setButtonChildren(<LoadingGif />);

    const form = document.forms.recoverPassword;

    let { password, passwordConfirm } = form;

    if (!password.value || !passwordConfirm.value) {
      setButtonChildren("Atualizar Senha");
      return handleShowModal("Preencha todos os campos");
    }

    const { result, message } = isPasswordValid(password.value);

    if (!result) {
      password.value = "";
      passwordConfirm.value = "";
      return handleShowModal(message);
    }

    await api
      .patch(`/user/password/password-recover${search}`, {
        password: password.value,
        passwordConfirm: passwordConfirm.value,
      })
      .then(({ data }) => {
        handleShowModal(data.response);
        handleLink("/");
      })
      .catch(({ response }) =>
        response
          ? handleShowModal(response.data.response)
          : handleShowModal("Erro no Servidor")
      );

    password.value = "";
    passwordConfirm.value = "";

    setButtonChildren("Atualizar Senha");
  };

  return (
    <>
      <Header />

      <Form name="recoverPassword">

        <InputForm
          type="password"
          placeholder="Nova Senha"
          name="password"
        />
        <InputForm
          type="password"
          placeholder="Confirmação de Nova Senha"
          name="passwordConfirm"
        />

        <div>
          <Button onClick={handleRecoverPassword}>{buttonChildren}</Button>
        </div>
      </Form>
    </>
  );
};

export default RecoverPassword;