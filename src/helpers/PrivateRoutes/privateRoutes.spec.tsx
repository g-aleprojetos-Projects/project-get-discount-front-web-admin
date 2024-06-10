import React from 'react';
import {RenderResult, render, waitFor} from '@testing-library/react';
import {MemoryRouter as Router, Routes, Route} from 'react-router-dom';
import {PrivateRoutes} from './privateRoutes';
import rotas from 'types/rotasAPP';
import {useAuthenticatorContext} from 'context/authetication';
import {Roles} from 'types/enuns';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => <div>Outlet</div>,
}));

jest.mock('context/authetication', () => ({
  useAuthenticatorContext: jest.fn().mockReturnValue({
    usuario: null,
  }),
}));

const mockUseAuthenticatorContext = useAuthenticatorContext as jest.Mock;

describe('PrivateRoutes', () => {
  let componente: RenderResult;
  test('DEVE redirecionar para a rota Login se o usuário não estiver autenticado', async () => {
    componente = render(
      <Router initialEntries={[rotas.LoginPage]}>
        <Routes>
          <Route path={rotas.LoginPage} element={<h1>Login</h1>} />
          <Route
            path="*"
            element={<PrivateRoutes roles={['ADMIN' as Roles]} />}
          />
        </Routes>
      </Router>,
    );

    await waitFor(() => {
      expect(componente.getByText('Login')).toBeDefined();
    });
  });

  test('DEVE redirecionar para a rota NaoAutorizado se o usuário estiver autenticado mas não tiver a role correta', async () => {
    mockUseAuthenticatorContext.mockReturnValue({
      usuario: {role: 'USER' as Roles},
    });

    componente = render(
      <Router initialEntries={['/']}>
        <Routes>
          <Route
            path={rotas.NaoAutorizadoPage}
            element={<h1>Não Autorizado</h1>}
          />
          <Route
            path="*"
            element={<PrivateRoutes roles={['ADMIN' as Roles]} />}
          />
        </Routes>
      </Router>,
    );

    await waitFor(() => {
      expect(componente.getByText('Não Autorizado')).toBeDefined();
    });
  });

  test('DEVE renderizar o Outlet se o usuário estiver autenticado e tiver a role correta', async () => {
    mockUseAuthenticatorContext.mockReturnValue({
      usuario: {role: 'ADMIN' as Roles},
    });

    componente = render(
      <Router initialEntries={['/']}>
        <Routes>
          <Route
            path="*"
            element={<PrivateRoutes roles={['ADMIN' as Roles]} />}
          />
        </Routes>
      </Router>,
    );

    await waitFor(() => {
      expect(componente.getByText('Outlet')).toBeDefined();
    });
  });
});
