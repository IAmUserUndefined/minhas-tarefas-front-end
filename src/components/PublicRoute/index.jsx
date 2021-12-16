import React from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from '../../providers/AuthProvider';

import LoadingBigGif from "../LoadingBigGif/index";

const PublicRoute = () => {

  const location = useLocation();

  const { loading, authenticated } = useAuth();

  if (loading) {
    return <LoadingBigGif />;
  }

  if (authenticated) {
    return <Navigate to="/tasks" />
  }

  if(location.pathname === "/password-recover" && location.search.length === 0) {
    return <Navigate to="/" />
  }

  return <Outlet />
};

export default PublicRoute;