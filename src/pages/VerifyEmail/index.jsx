import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import VerifyEmailTitle from "../../components/VerifyEmailTitle/index";

import api from "../../services/api";

import { useModal } from "../../providers/ModalProvider";

const VerifyEmail = ({ location }) => {
  const navigate = useNavigate();
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
    navigate("/");
  });

  return <VerifyEmailTitle />;
};

export default VerifyEmail;
