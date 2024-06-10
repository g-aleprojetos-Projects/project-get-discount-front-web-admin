import React, {ReactNode} from 'react';
import {act, renderHook} from '@testing-library/react-hooks';
import {AutenticadoProvide, useAuthenticatorContext} from './authetication';

type AutenticadorProvider = {
  children: ReactNode;
};

const AutenticadorContextProvider = ({children}: AutenticadorProvider) => (
  <AutenticadoProvide>{children}</AutenticadoProvide>
);

const wrapper = ({children}: AutenticadorProvider) => (
  <AutenticadorContextProvider>{children}</AutenticadorContextProvider>
);

describe('AutenticadorContext', () => {
  const mockToken = {
    sub: '1234567890ABCDEF',
    nome: 'John Doe',
    role: 'ADMIN',
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
    iat: Math.floor(Date.now() / 1000) - 60 * 60,
  };

  const payload = JSON.stringify(mockToken);
  const base64UrlPayload = btoa(payload);
  const validMockToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.${base64UrlPayload}.signature`;

  test('DEVE ter o estado autenticador igual a false inicialmente', () => {
    const {result} = renderHook(() => useAuthenticatorContext(), {wrapper});
    expect(result.current.autenticado).toBeFalsy();
  });

  test('DEVE alterar o estado autenticado para true quando handleAutenticado é chamado', () => {
    const {result} = renderHook(() => useAuthenticatorContext(), {wrapper});
    act(() => {
      result.current.handleAutenticado({
        accessToken: validMockToken,
        auth: true,
        refreshToken: {
          id: 'mockId',
          expiresIn: 3600,
          usuarioId: 'mockUserId',
        },
      });
    });

    expect(result.current.autenticado).toBeTruthy();
  });

  test('DEVE definir o usuário quando handleAutenticado é chamado', () => {
    const {result} = renderHook(() => useAuthenticatorContext(), {wrapper});
    act(() => {
      result.current.handleAutenticado({
        accessToken: validMockToken,
        auth: true,
        refreshToken: {
          id: 'mockId',
          expiresIn: 3600,
          usuarioId: 'mockUserId',
        },
      });
    });

    expect(result.current.usuario).toBeDefined();
  });

  test('DEVE ter o usuário com o nome igual a John Doe quando handleAutenticado é chamado', () => {
    const {result} = renderHook(() => useAuthenticatorContext(), {wrapper});
    act(() => {
      result.current.handleAutenticado({
        accessToken: validMockToken,
        auth: true,
        refreshToken: {
          id: 'mockId',
          expiresIn: 3600,
          usuarioId: 'mockUserId',
        },
      });
    });

    expect(result.current.usuario?.nome).toBe('John Doe');
  });

  test('DEVE ter o usuário com a role igual a ADMIN quando handleAutenticado é chamado', () => {
    const {result} = renderHook(() => useAuthenticatorContext(), {wrapper});
    act(() => {
      result.current.handleAutenticado({
        accessToken: validMockToken,
        auth: true,
        refreshToken: {
          id: 'mockId',
          expiresIn: 3600,
          usuarioId: 'mockUserId',
        },
      });
    });

    expect(result.current.usuario?.role).toBe('ADMIN');
  });

  test('DEVE ter o estado autenticador igual a false quando handleAutenticado é chamado com auth igual a false', () => {
    const {result} = renderHook(() => useAuthenticatorContext(), {wrapper});
    act(() => {
      result.current.handleAutenticado({
        accessToken: validMockToken,
        auth: false,
        refreshToken: {
          id: 'mockId',
          expiresIn: 3600,
          usuarioId: 'mockUserId',
        },
      });
    });

    expect(result.current.autenticado).toBeFalsy();
  });

  test('DEVE definir o usuário corretamente quando handleAutenticado é chamado', () => {
    const {result} = renderHook(() => useAuthenticatorContext(), {wrapper});
    act(() => {
      result.current.handleAutenticado({
        accessToken: validMockToken,
        auth: true,
        refreshToken: {
          id: 'mockId',
          expiresIn: 3600,
          usuarioId: 'mockUserId',
        },
      });
    });

    expect(result.current.usuario).toEqual({
      id: mockToken.sub,
      nome: mockToken.nome,
      role: mockToken.role,
    });
  });

  test('DEVE armazenar o token e o usuário no localStorage quando handleAutenticado é chamado', () => {
    const {result} = renderHook(() => useAuthenticatorContext(), {wrapper});
    act(() => {
      result.current.handleAutenticado({
        accessToken: validMockToken,
        auth: true,
        refreshToken: {
          id: 'mockId',
          expiresIn: 3600,
          usuarioId: 'mockUserId',
        },
      });
    });

    expect(localStorage.getItem('tokens')).toEqual(JSON.stringify(mockToken));
    expect(localStorage.getItem('user')).toEqual(
      JSON.stringify({
        nome: mockToken.nome,
        role: mockToken.role,
      }),
    );
  });
});
