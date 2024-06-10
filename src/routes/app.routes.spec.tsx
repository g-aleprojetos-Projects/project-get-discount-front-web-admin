import React from 'react';
import {RenderResult, render} from '@testing-library/react';
import {MemoryRouter as Router} from 'react-router-dom';
import {WebRotas} from './app.routes';
import {useAuthenticatorContext} from 'context/authetication';
import {Roles} from 'types/enuns';

jest.mock('context/authetication', () => ({
  ...jest.requireActual('context/authetication'),
  useAuthenticatorContext: jest.fn(),
}));

const useAuthenticatorContextMock = useAuthenticatorContext as jest.Mock;

describe('WebRotas', () => {
  let componente: RenderResult;

  beforeEach(() => {
    useAuthenticatorContextMock.mockReturnValue({
      usuario: {role: 'USER' as Roles},
      autenticado: true,
    });
    componente = render(
      <Router initialEntries={['/']}>
        <WebRotas />
      </Router>,
    );
  });

  test('DEVE renderizar o WebRotas', () => {
    const header = componente.queryByTestId('test_rotas');
    expect(header).not.toBeNull();
  });

  test('DEVE renderizar o Header se o usuário estiver autenticado', () => {
    const header = componente.queryByTestId('test_header');
    expect(header).not.toBeNull();
  });

  test('NÃO DEVE renderizar o Header se o usuário não estiver autenticado', () => {
    useAuthenticatorContextMock.mockReturnValue({
      usuario: {role: 'USER' as Roles},
      autenticado: false,
    });

    componente.rerender(
      <Router initialEntries={['/']}>
        <WebRotas />
      </Router>,
    );

    const header = componente.queryByTestId('test_header');

    expect(header).toBeNull();
  });
});
