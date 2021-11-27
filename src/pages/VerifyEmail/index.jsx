import React, { useEffect } from "react";
import { useHistory } from "react-router";

import VerifyEmailTitle from "../../components/VerifyEmailTitle/index";

import api from "../../services/api";

import { useModal } from "../../providers/ModalProvider";

const VerifyEmail = ({ location }) => {
  const history = useHistory();
  const { search } = location;
  const { handleShowModal } = useModal();

  useEffect(() => {
    const handleVerifyEmail = async () => {
      await api
        .post(`/verify-email${search}`)
        .then(({ data }) => handleShowModal(data.response))
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor")
        );
    };
    handleVerifyEmail();
    history.push("/");
  });

  return <VerifyEmailTitle />;
};

export default VerifyEmail;
