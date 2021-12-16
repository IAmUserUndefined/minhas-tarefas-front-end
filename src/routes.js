import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PublicRoute from './components/PublicRoute/index';
import PrivateRoute from './components/PrivateRoute/index';

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

export const AppRoutes = () => {
  return (
      <>
          <Routes>
              <Route path="/" element={<PublicRoute />} exact>
                  <Route path="/" element={<Login />} exact />
              </Route>

              <Route path="/register" element={<PublicRoute />} exact>
                  <Route path="/register" element={<Register />} />
              </Route>

              <Route path="/verify-email" element={<PublicRoute />} exact>
                  <Route path="/verify-email" element={<VerifyEmail />} exact />
              </Route>

              <Route path="/forget-password" element={<PublicRoute />} exact>
                  <Route path="/forget-password" element={<ForgetPassword />} exact />
              </Route>

              <Route path="/password-recover" element={<PublicRoute />} exact>
                  <Route path="/password-recover" element={<RecoverPassword />} exact />
              </Route>

              <Route path="/tasks" element={<PrivateRoute />} exact>
                  <Route path="/tasks" element={<Tasks />} exact />
              </Route>

              <Route path="/config-user" element={<PrivateRoute />} exact>
                  <Route path="/config-user" element={<ConfigUser />} exact />
              </Route>

              <Route path="/verify-email-update" element={<PrivateRoute />} exact>
                  <Route path="/verify-email-update" element={<VerifyEmailUpdate/>} exact />
              </Route>

              <Route path="/*" element={<PageNotFound/>} />

          </Routes>
      </>
  );
}

export const ModalRoute = () => {
  return (
      <>
          <Routes>
              <Route path="/" element={<Modal />} />
              <Route path="/register" element={<Modal />} />
              <Route path="/forget-password" element={<Modal />} />
              <Route path="/password-recover" element={<Modal />} />
              <Route path="/photos" element={<Modal />} />
              <Route path="/config-user" element={<Modal />} />
          </Routes>
      </>
  );
}