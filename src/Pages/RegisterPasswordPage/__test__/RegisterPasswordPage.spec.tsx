import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {RegisterPasswordPage} from '../RegisterPasswordPage';

describe('RegisterPasswordPage', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<RegisterPasswordPage />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "registerPasswordPage"`, () => {
      const page = componente.getByTestId('registerPasswordPage');
      expect(page).toBeDefined();
    });

    test(`DEVE renderizar o texto "definir nova senha"`, () => {
      const texto = componente.getByTestId('texto-titulo');
      expect(texto.textContent).toBe('Definir nova senha');
    });

    test(`DEVE renderizar o texto "Insira sua nova senha"`, () => {
      const texto = componente.getByText('Insira sua nova senha');
      expect(texto).toBeDefined();
    });

    test(`DEVE renderizar o texto "Confirme sua nova senha"`, () => {
      const texto = componente.getByText('Confirme sua nova senha');
      expect(texto).toBeDefined();
    });

    test(`DEVE renderizar o input "nova senha"`, () => {
      const input = componente.getByTestId('input-nova-senha');
      expect(input).toBeDefined();
    });

    test(`DEVE renderizar o input "confirmar senha"`, () => {
      const input = componente.getByTestId('input-confirmar-senha');
      expect(input).toBeDefined();
    });

    test(`DEVE renderizar o botão "definir nova senha"`, () => {
      const botao = componente.getByTestId('bnt-redefinir-senha');
      expect(botao).toBeDefined();
    });
  });

  describe('Comportamento', () => {
    test('DEVE preencher o valor no "Insira sua nova senha"', () => {
      const login = componente.getByLabelText('Insira sua nova senha');
      fireEvent.change(login, {target: {value: 'senha123'}});
      expect((login as HTMLInputElement).value).toBe('senha123');
    });

    test('DEVE preencher o valor no "Confirme sua nova senha"', () => {
      const login = componente.getByLabelText('Confirme sua nova senha');
      fireEvent.change(login, {target: {value: 'senha123'}});
      expect((login as HTMLInputElement).value).toBe('senha123');
    });
  });
});
