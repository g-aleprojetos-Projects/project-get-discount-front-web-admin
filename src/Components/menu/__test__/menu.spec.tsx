import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {useNavigate} from 'react-router-dom';
import {useAuthenticatorContext} from 'context/authetication';
import {Menu} from '../menu';
import {Roles} from 'types/enuns';
import {IUser} from 'types/interfaces';
import rotas from 'types/rotasAPP';

jest.mock('react-router-dom');
const mockedUseNavigate = useNavigate as jest.Mock;

jest.mock('context/authetication', () => ({
  useAuthenticatorContext: jest.fn(),
}));

const useAuthenticatorContextMock = useAuthenticatorContext as jest.Mock;

describe('Menu', () => {
  let componente: RenderResult;
  const aoClicarMock = jest.fn();

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
    componente = render(<Menu handleLogout={aoClicarMock} />);
  });

  describe('Renderização', () => {
    test('Deve renderizar o componente "Menu"', () => {
      const menu = componente.getByTestId('test_menu');
      expect(menu).toBeDefined();
    });

    test(`DEVE renderizar o componente com o texto "Página Administrativa"`, () => {
      const adminPage = componente.getByText('Página Administrativa');
      expect(adminPage).toBeDefined();
    });

    test(`DEVE renderizar o componente com o texto "Página Administrativa" com font-family igual "AvertaStd-Regular"`, () => {
      const adminPage = componente.getByText('Página Administrativa');
      const style = window.getComputedStyle(adminPage);
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });

    test(`DEVE renderizar o componente com o texto "Pagina Usuario"`, () => {
      const userPage = componente.getByText('Página Usuario');
      expect(userPage).toBeDefined();
    });

    test(`DEVE renderizar o componente com o texto "Pagina Usuario" com font-family igual "AvertaStd-Regular"`, () => {
      const userPage = componente.getByText('Página Usuario');
      const style = window.getComputedStyle(userPage);
      expect(style.fontFamily).toEqual('AvertaStd-Regular');
    });

    test(`DEVE renderizar o componente com o texto "Logout"`, () => {
      const sair = componente.getByText('Logout');
      expect(sair).toBeDefined();
    });

    describe('QUANDO o usuario for do tipo "USER"', () => {
      beforeEach(() => {
        useAuthenticatorContextMock.mockReturnValueOnce({
          usuario: {...usuarioMock, role: 'USER' as Roles},
        });
        componente.rerender(<Menu handleLogout={aoClicarMock} />);
      });

      test(`NAO DEVE renderizar o componente com o texto "Página Administrativa" `, () => {
        const adminPage = componente.queryByText('Página Administrativa');
        expect(adminPage).toBeNull();
      });

      test(`NÃO DEVE renderizar o componente com o texto "Página Usuario"`, () => {
        const userPage = componente.queryByText('Página Usuario');
        expect(userPage).toBeNull();
      });
    });
  });

  describe('Comportamento', () => {
    describe('Navegação', () => {
      test(`DEVE chamar a função QUANDO clicar no "Página Administrativa" no menu da navegação`, () => {
        const admin = componente.getByText('Página Administrativa');
        fireEvent.click(admin);
        expect(mockedUseNavigate()).toHaveBeenCalledWith(rotas.AdminPage);
      });

      test(`DEVE chamar a função QUANDO clicar no "Página Usuario" no menu da navegação`, () => {
        const user = componente.getByText('Página Usuario');
        fireEvent.click(user);

        expect(mockedUseNavigate()).toHaveBeenCalledWith(rotas.UserPage);
      });
    });

    test(`DEVE chamar a função QUANDO clicar no "Logout" no menu da navegação`, () => {
      const sair = componente.getByText('Logout');
      fireEvent.click(sair);

      expect(aoClicarMock).toHaveBeenCalled();
    });

    test(`DEVE renderizar o componente com o texto "Página Administrativa" com font-family igual "AvertaStd-Regular`, () => {
      const navAdmin = componente.getByText('Página Administrativa');
      fireEvent.click(navAdmin);
      const admin = componente.getByText('Página Administrativa');
      const style = window.getComputedStyle(admin);
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });

    test(`DEVE renderizar o componente com o texto "Página Usuario" com font-family igual "AvertaStd-Regular`, () => {
      const navUser = componente.getByText('Página Usuario');
      fireEvent.click(navUser);
      const user = componente.getByText('Página Usuario');
      const style = window.getComputedStyle(user);
      expect(style.fontFamily).toEqual('AvertaStd-Bold');
    });
  });
});
