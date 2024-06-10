import React from 'react';
import {RenderResult, fireEvent, render} from '@testing-library/react';
import {useNavigate} from 'react-router-dom';
import {useAuthenticatorContext} from 'context/authetication';
import {IUser} from 'types/interfaces';
import {Roles} from 'types/enuns';
import {Nav} from '../nav';

jest.mock('react-router-dom');
const mockedUseNavigate = useNavigate as jest.Mock;

jest.mock('context/authetication', () => ({
  useAuthenticatorContext: jest.fn(),
}));

const useAuthenticatorContextMock = useAuthenticatorContext as jest.Mock;

describe('Nav', () => {
  let componente: RenderResult;
  const handleLogoutMock = jest.fn();
  const usuarioMock: IUser = {
    id: 'user-mock-id',
    nome: 'user-mock-name',
    email: 'user-mock@email.com',
    role: 'ADMIN' as Roles,
  };

  beforeEach(() => {
    mockedUseNavigate.mockReturnValue(jest.fn());
    useAuthenticatorContextMock.mockReturnValue({
      usuario: usuarioMock,
      autenticado: true,
      handleAutenticado: jest.fn(),
    });
    componente = render(<Nav handleLogout={handleLogoutMock} />);
  });

  describe('Renderização', () => {
    test('DEVE renderizar o componente "Nav"', () => {
      expect(componente.getByTestId('test_nav')).toBeDefined();
    });

    test('Deve renderizar o "Logo"', () => {
      expect(componente.getByTestId('test_logo')).toBeDefined();
    });

    test('DEVE renderizar o componente "Menu"', () => {
      expect(componente.getByTestId('test_menu')).toBeDefined();
    });

    test('DEVE renderizar o componente "Menu" com o texto "Página Administrativa"', () => {
      expect(componente.getByText('Página Administrativa')).toBeDefined();
    });

    test('DEVE renderizar o componente "Menu" com o texto "Página Usuario"', () => {
      expect(componente.getByText('Página Usuario')).toBeDefined();
    });
  });

  describe('Comportamento', () => {
    test('DEVE chamar a função "handleLogout" ao clicar no botão de logout', () => {
      const botaoLogout = componente.getByText('Logout');
      fireEvent.click(botaoLogout);
      expect(handleLogoutMock).toHaveBeenCalled();
    });
  });
});
