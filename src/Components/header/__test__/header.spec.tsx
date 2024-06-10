import React from 'react';
import '@testing-library/jest-dom';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {useNavigate} from 'react-router-dom';
import {useAuthenticatorContext} from 'context/authetication';
import {Header} from 'Components/header/header';
import {IUser} from 'types/interfaces';
import {Roles} from 'types/enuns';
import rotas from 'types/rotasAPP';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(() => jest.fn()),
}));
const mockedUseNavigate = useNavigate as jest.Mock;

jest.mock('context/authetication', () => ({
  useAuthenticatorContext: jest.fn(),
}));

const useAuthenticatorContextMock = useAuthenticatorContext as jest.Mock;

const mockStorage = {
  length: 0,
  key: jest.fn(),
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: mockStorage,
});

describe('Header', () => {
  let componente: RenderResult;
  const handleAutenticadoMock = jest.fn();
  const navigateMock = jest.fn();

  const usuarioMock: IUser = {
    id: 'user-mock-id',
    nome: 'user-mock-name',
    email: 'user-mock@email.com',
    role: 'ADMIN' as Roles,
  };

  beforeEach(() => {
    mockedUseNavigate.mockReturnValue(navigateMock);
    useAuthenticatorContextMock.mockReturnValue({
      usuario: usuarioMock,
      autenticado: true,
      handleAutenticado: handleAutenticadoMock,
    });
    componente = render(<Header />);
  });

  describe('Renderização', () => {
    test('DEVE renderizar o componente "Header"', () => {
      const botao = componente.getByTestId('test_header');
      expect(botao).toBeDefined();
    });

    test('DEVE renderizar o componente com o texto "Página Administrativa"', () => {
      const adminPage = componente.getByText('Página Administrativa');
      expect(adminPage).toBeDefined();
    });

    test('DEVE renderizar o componente com o texto "Pagina Usuario"', () => {
      const userPage = componente.getByText('Página Usuario');
      expect(userPage).toBeDefined();
    });

    test('DEVE renderizar o componente com o texto "Logout"', () => {
      const logout = componente.getByText('Logout');
      expect(logout).toBeDefined();
    });
  });

  describe('Comportamento', () => {
    test('DEVE chamar a função "handleLogout" ao clicar no botão "Logout"', () => {
      const logout = componente.getByText('Logout');
      fireEvent.click(logout);
      expect(useAuthenticatorContextMock).toHaveBeenCalled();
    });

    test('DEVE abrir o Popup quando o botão de logout é clicado', () => {
      const logout = componente.getByText('Logout');
      fireEvent.click(logout);

      const popup = componente.getByText('Deseja fazer Logout?');
      expect(popup).toBeDefined();
    });

    test('DEVE chamar a função "handleOnConfirmarLogout" ao clicar no botão "Confirmar" do Popup', () => {
      const logout = componente.getByText('Logout');
      fireEvent.click(logout);
      const confirmar = componente.getByText('Confirmar');
      fireEvent.click(confirmar);
      expect(useAuthenticatorContextMock).toHaveBeenCalled();
    });

    test('DEVE chamar a função "handleLogout" ao clicar no botão "Cancelar" do Popup', () => {
      const logout = componente.getByText('Logout');
      fireEvent.click(logout);
      const cancelar = componente.getByText('Cancelar');
      fireEvent.click(cancelar);
      expect(useAuthenticatorContextMock).toHaveBeenCalled();
    });

    test('DEVE chamar o "localStorage.clear" QUANDO o botão de confirmar no Popup é clicado', () => {
      const logout = componente.getByText('Logout');
      fireEvent.click(logout);

      const confirmar = componente.getByText('Confirmar');
      fireEvent.click(confirmar);

      expect(localStorage.clear).toHaveBeenCalled();
    });

    test('DEVE chamar a "rota.Login" QUANDO o botão de confirmar no Popup é clicado', () => {
      const logout = componente.getByText('Logout');
      fireEvent.click(logout);

      const confirmar = componente.getByText('Confirmar');
      fireEvent.click(confirmar);

      expect(navigateMock).toBeCalledWith(rotas.LoginPage);
    });

    test('DEVE "handleAutenticadoMock" com valores de reset a autenticação QUANDO o botão de confirmar no Popup é clicado', () => {
      const logout = componente.getByText('Logout');
      fireEvent.click(logout);

      const confirmar = componente.getByText('Confirmar');
      fireEvent.click(confirmar);

      expect(handleAutenticadoMock).toBeCalledWith({
        auth: false,
        accessToken: '',
        refreshToken: {id: '', expiresIn: 0, usuarioId: ''},
      });
    });
  });
});
