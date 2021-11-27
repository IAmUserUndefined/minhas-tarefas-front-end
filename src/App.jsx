import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppContainer from "./styles/app";

import { CustomRoutes, Routes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <CustomRoutes />
        <Routes />
      </AppContainer>
    </BrowserRouter>
  );
};

export default App;
