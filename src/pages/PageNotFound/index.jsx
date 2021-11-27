import React from "react";
import { useHistory } from "react-router";

import PageNotFoundContainer from "./styles";
import Button from "../../components/Button/index";

const PageNotFound = () => {
  const history = useHistory();
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      <PageNotFoundContainer>
        <h1>404</h1>
        <h2>Essa Página Não Existe</h2>
        <Button onClick={() => handleGoBack()}>Voltar à Página Anterior</Button>
      </PageNotFoundContainer>
    </>
  );
};

export default PageNotFound;
