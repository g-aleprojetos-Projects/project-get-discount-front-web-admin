import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {NotFoundPage} from 'Pages/NotFoundPage';
import {AdminPage} from 'Pages/AdminPage';
import {LoginPage} from 'Pages/Login';
import {RecoverPasswordPage} from 'Pages/RecoverPasswordPage';
import {Header} from 'Components/header';
import rotasAPP from 'types/rotasAPP';
import {Roles} from 'types/enuns';
import {UserPage} from 'Pages/Userpage';
import {NotAuthorizedPage} from 'Pages/NotAuthorizedPage';
import {PrivateRoutes} from 'helpers/PrivateRoutes';
import {useAuthenticatorContext} from 'context/authetication';
import * as S from './app.routes.styles';

export const WebRotas = () => {
  const {autenticado} = useAuthenticatorContext();
  console.log('autenticado: ', autenticado);
  return (
    <S.Container data-testid={'test_rotas'}>
      {autenticado && <Header />}
      <Routes>
        <Route path={rotasAPP.LoginPage} element={<LoginPage />} />
        <Route
          path={rotasAPP.RecoverPasswordPage}
          element={<RecoverPasswordPage />}
        />
        <Route
          path="/"
          element={<PrivateRoutes roles={[Roles.ADMIN, Roles.USER]} />}>
          <Route path={rotasAPP.UserPage} element={<UserPage />} />
          <Route
            path={rotasAPP.NaoAutorizadoPage}
            element={<NotAuthorizedPage />}
          />
          <Route path={rotasAPP.NotFoundPage} element={<NotFoundPage />} />
          <Route path="/" element={<PrivateRoutes roles={[Roles.ADMIN]} />}>
            <Route path={rotasAPP.AdminPage} element={<AdminPage />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </S.Container>
  );
};
