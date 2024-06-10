import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {RecoverPasswordPage} from '../RecoverPasswordPage';

describe('RecoverPasswordPage', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<RecoverPasswordPage />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "recoverPasswordPage"`, () => {
      const home = componente.getByTestId('recoverPasswordPage');
      expect(home).toBeDefined();
    });

    test(`DEVE renderizar o titulo da pagina`, () => {
      const titulo = componente.getByText('Recuperar senha');
      expect(titulo).toBeDefined();
    });

    test(`DEVE renderizar o subTitulo da pagina`, () => {
      const titulo = componente.getByText(
        'Vamos enviar a recuperação de senha por e-mail.',
      );
      expect(titulo).toBeDefined();
    });

    test(`DEVE renderizar o input de email`, () => {
      const inputEmail = componente.getByTestId('input-email');
      expect(inputEmail).toBeDefined();
    });

    test(`DEVE renderizar o botão recuperar senha`, () => {
      const botaoLogin = componente.getByTestId('bnt-recuperar-senha');
      expect(botaoLogin).toBeDefined();
    });

    test(`DEVE renderizar o texto do botão de "recuperar senha"`, () => {
      const textoBotaoRecuperarSenha = componente.getByText(
        'recuperar minha senha',
      );
      expect(textoBotaoRecuperarSenha).toBeDefined();
    });
  });

  describe('Comportamento', () => {
    test('DEVE preencher o valor do email', () => {
      const login = componente.getByPlaceholderText('contato@email.com');
      fireEvent.change(login, {target: {value: 'teste@email.com'}});
      expect((login as HTMLInputElement).value).toBe('teste@email.com');
    });
  });
});
