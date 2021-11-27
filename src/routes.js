import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { useAuth } from './providers/AuthProvider';
import { useModal } from './providers/ModalProvider';

import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import VerifyEmail from "./pages/VerifyEmail/index";
import ForgetPassword from "./pages/ForgetPassword/index";
import RecoverPassword from "./pages/RecoverPassword/index";
import Tasks from "./pages/Tasks/index";
import ConfigUser from "./pages/ConfigUser/index";
import VerifyEmailUpdate from "./pages/VerifyEmailUpdate/index";
import Modal from "./pages/Modal/index";
import PageNotFound from './pages/PageNotFound';

import LoadingBigGif from "./components/LoadingBigGif";

const CustomRoute = ({ isPrivate, isNotPrivate, location, ...rest }) => {
  const { loading, authenticated, expirySession, setExpirySession, handleLogout } = useAuth();
  const { handleShowModal } = useModal();

  if (loading) {
    return <LoadingBigGif />;
  }

  if(expirySession) {
    setExpirySession(false);
    handleLogout();
    return handleShowModal("Sessão Expirada");
  }

  if(location.pathname === "/password-recover" && location.search === "") {
    return <Redirect to="/" />
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/" />
  }

  if (isNotPrivate && authenticated) {
    return <Redirect to="/tasks" />
  }

  return <Route {...rest} />;
};

export const CustomRoutes = () => {
  return (
        <>
          <Switch>
            <CustomRoute path="/" isNotPrivate exact component={Login} />
            <CustomRoute path="/register" isNotPrivate exact component={Register} />
            <CustomRoute path="/verify-email" isNotPrivate exact component={VerifyEmail} />
            <CustomRoute path="/forget-password" isNotPrivate exact component={ForgetPassword} />
            <CustomRoute path="/password-recover" isNotPrivate exact component={RecoverPassword} />
            <CustomRoute path="/tasks" isPrivate exact component={Tasks} />
            <CustomRoute path="/config-user" isPrivate exact component={ConfigUser} />
            <CustomRoute path="/verify-email-update" isPrivate exact component={VerifyEmailUpdate} />
            <Route component={PageNotFound}/>
          </Switch>
        </>
    );
};

export const Routes = () => {
  return (
    <>
      <Route component={Modal}/>
    </>
  );
};
