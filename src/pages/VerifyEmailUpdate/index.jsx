import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import VerifyEmailTitle from "../../components/VerifyEmailTitle/index";

import api from "../../services/api";

import { useModal } from "../../providers/ModalProvider";

const VerifyEmailUpdate = () => {
  const navigate = useNavigate();
  const { search } = location;
  const { handleShowModal } = useModal();

  useEffect(() => {
    const handleVerifyEmailUpdate = async () => {
      await api
        .patch(`/update-email${search}`)
        .then(({ data }) => handleShowModal(data.response))
        .catch(({ response }) =>
          response
            ? handleShowModal(response.data.response)
            : handleShowModal("Erro no Servidor")
        );
    };

    handleVerifyEmailUpdate();
    navigate("/");
  });

  return <VerifyEmailTitle />;
};

export default VerifyEmailUpdate;
