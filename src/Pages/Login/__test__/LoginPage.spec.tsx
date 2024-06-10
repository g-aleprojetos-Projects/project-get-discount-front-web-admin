import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {LoginPage} from '../LoginPage';

describe('LoginPage', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<LoginPage />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "LoginPage"`, () => {
      const home = componente.getByTestId('loginPage');
      expect(home).toBeDefined();
    });

    test(`DEVE renderizar o titulo da pagina`, () => {
      const titulo = componente.getByText('LOGIN');
      expect(titulo).toBeDefined();
    });

    test(`DEVE renderizar o input de email`, () => {
      const inputEmail = componente.getByTestId('input-email');
      expect(inputEmail).toBeDefined();
    });

    test(`DEVE renderizar o input de senha`, () => {
      const inputSenha = componente.getByTestId('input-senha');
      expect(inputSenha).toBeDefined();
    });

    test(`DEVE renderizar o botão de login`, () => {
      const botaoLogin = componente.getByTestId('bnt-login');
      expect(botaoLogin).toBeDefined();
    });

    test(`DEVE renderizar o texto do botão de login`, () => {
      const textoBotaoLogin = componente.getByText('Logar');
      expect(textoBotaoLogin).toBeDefined();
    });

    test(`DEVE renderizar o botão de recuperar senha`, () => {
      const botaoRecuperarSenha = componente.getByTestId(
        'botao-recuperar-senha',
      );
      expect(botaoRecuperarSenha).toBeDefined();
    });

    test(`DEVE renderizar o texto do botão de recuperar senha`, () => {
      const textoBotaoRecuperarSenha = componente.getByText(
        'Esqueceu sua senha?',
      );
      expect(textoBotaoRecuperarSenha).toBeDefined();
    });
  });

  describe('Comportamento', () => {
    test('DEVE preencher o valor do email', () => {
      const login = componente.getByLabelText('Seu email');
      fireEvent.change(login, {target: {value: 'teste@email.com.br'}});
      expect((login as HTMLInputElement).value).toBe('teste@email.com.br');
    });

    test('DEVE preencher o valor da senha', () => {
      const senha = componente.getByLabelText('Sua senha');
      fireEvent.change(senha, {target: {value: 'Senha123'}});
      expect((senha as HTMLInputElement).value).toBe('Senha123');
    });
  });
});
