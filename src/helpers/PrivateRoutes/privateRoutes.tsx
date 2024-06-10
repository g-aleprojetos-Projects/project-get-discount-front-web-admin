import React from 'react';
import {useLocation, Navigate, Outlet} from 'react-router-dom';
import {useAuthenticatorContext} from 'context/authetication';
import rotas from 'types/rotasAPP';
import {Roles} from 'types/enuns';

export const PrivateRoutes = ({roles}: {roles: Array<Roles>}) => {
  const {usuario, autenticado} = useAuthenticatorContext();
  const location = useLocation();
  const autorizacao = roles.find(role => role === usuario?.role);

  if (!autenticado) {
    return <Navigate to={rotas.LoginPage} state={{from: location}} replace />;
  } else if (!autorizacao) {
    return (
      <Navigate to={rotas.NaoAutorizadoPage} state={{from: location}} replace />
    );
  } else {
    return <Outlet />;
  }
};
