import React from 'react';
import Dashboard from 'layout/Dashboard';
import {Navigate} from 'react-router-dom';

function PrivateRoute() {
  const auth = false;
  return auth ? <Dashboard /> : <Navigate to='/actions/sign-in' />;
}

export default PrivateRoute;
