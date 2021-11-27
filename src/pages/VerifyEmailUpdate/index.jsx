import React, { useEffect } from "react";

import VerifyEmailTitle from "../../components/VerifyEmailTitle/index";

import api from "../../services/api";

import { useModal } from "../../providers/ModalProvider";

const VerifyEmailUpdate = ({ location }) => {
  const { search } = location;
  const { handleShowModal } = useModal();

  useEffect(() => {
    const handleVerifyEmailUpdate = async () => {
      await api
        .post(`/verify-email${search}`)
        .then(({ data }) => handleShowModal(data.response))
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor")
        );
    };

    handleVerifyEmailUpdate();
  });

  return <VerifyEmailTitle />;
};

export default VerifyEmailUpdate;
