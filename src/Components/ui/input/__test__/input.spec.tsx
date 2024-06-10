import React from 'react';
import '@testing-library/jest-dom';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {Input} from '..';

describe('Input', () => {
  let componente: RenderResult;
  const labelmock = 'textoLabel';
  const handleMostrarSenhaMock = jest.fn();

  beforeEach(() => {
    componente = render(<Input label={labelmock} />);
  });

  describe('Renderização', () => {
    test('DEVE renderizar o componente "Input"', () => {
      const botao = componente.getByTestId('input-pardao');
      expect(botao).toBeDefined();
    });

    test(`DEVE renderizar o label com o texto "${labelmock}"`, () => {
      const label = componente.getByTestId('input-label');
      expect(label.textContent).toBe('textoLabel');
    });

    test('DEVE renderizar o input do tipo "text"', () => {
      const input = componente.getByTestId(
        'input-padrao-box',
      ) as HTMLInputElement;
      expect(input).toBeInstanceOf(HTMLInputElement);
      expect(input.type).toBe('text');
    });

    describe('QUANDO o input for do tipo "email"', () => {
      beforeEach(() => {
        componente.rerender(
          <Input tipo="email" label={labelmock} placeholder="test@email.com" />,
        );
      });

      test('DEVE renderizar o input do tipo "email"', () => {
        const input = componente.getByTestId(
          'input-padrao-box',
        ) as HTMLInputElement;
        expect(input).toBeInstanceOf(HTMLInputElement);
        expect(input.type).toBe('email');
      });

      test(`DEVE renderizar o label com o texto ${labelmock}`, () => {
        const label = componente.getByTestId('input-label');
        expect(label.textContent).toBe('textoLabel');
      });

      test('DEVE renderizar o placeholder corretamente', () => {
        const input = componente.getByTestId(
          'input-padrao-box',
        ) as HTMLInputElement;
        expect(input.placeholder).toBe('test@email.com');
      });
    });

    describe('QUANDO o input for do tipo "password"', () => {
      beforeEach(() => {
        componente.rerender(
          <Input label={labelmock} tipo="password" placeholder="********" />,
        );
      });

      test('DEVE renderizar o input do tipo "password"', () => {
        const input = componente.getByTestId(
          'input-padrao-box',
        ) as HTMLInputElement;
        expect(input.type).toBe('password');
      });

      test('Deve renderizar o placeholder "********"', () => {
        const input = componente.getByTestId(
          'input-padrao-box',
        ) as HTMLInputElement;
        expect(input.placeholder).toBe('********');
      });

      test('DEVE renderizar o icone de "olho fechado"', () => {
        const icone = componente.getByTestId('icone-olho-fechado');
        expect(icone).toBeDefined();
      });

      test('DEVE renderizar o icone de "olho aberto" QUANDO clicar no icone de "olho fechado"', () => {
        const icone = componente.getByTestId('icone-olho-fechado');
        fireEvent.click(icone);
        const iconeAberto = componente.getByTestId('icone-olho-aberto');
        expect(iconeAberto).toBeDefined();
      });

      test('DEVE renderizar o icone olho aberto QUANDO "deveMostrarsenha" for igual a true', () => {
        componente.rerender(
          <Input
            label={labelmock}
            tipo="password"
            deveMostrarSenha={true}
            handleMostrarSenha={handleMostrarSenhaMock}
          />,
        );
        const iconeAberto = componente.getByTestId('icone-olho-aberto');
        expect(iconeAberto).toBeDefined();
      });
    });
  });

  describe('Comportamento', () => {
    test('DEVE preencher o input com o texto "teste"', () => {
      const input = componente.getByLabelText(`${labelmock}`);
      fireEvent.change(input, {target: {value: 'teste'}});
      expect((input as HTMLInputElement).value).toBe('teste');
    });

    test('DEVE atualizar o texto no input', () => {
      const input = componente.getByLabelText(`${labelmock}`);
      fireEvent.change(input, {target: {value: 'teste'}});
      fireEvent.change(input, {target: {value: 'teste@email.com'}});
      expect((input as HTMLInputElement).value).toBe('teste@email.com');
    });

    test('DEVE chamar a função "handleMostrarSenha" QUANDO clicar no icone de "olho fechado"', () => {
      componente.rerender(
        <Input
          label={labelmock}
          tipo="password"
          handleMostrarSenha={handleMostrarSenhaMock}
        />,
      );
      const icone = componente.getByTestId('icone-olho-fechado');
      fireEvent.click(icone);
      expect(handleMostrarSenhaMock).toHaveBeenCalledTimes(1);
    });

    test('DEVE chamar a função "handleMostrarSenha" QUANDO clicar no icone de "olho aberto"', () => {
      componente.rerender(
        <Input
          label={labelmock}
          tipo="password"
          handleMostrarSenha={handleMostrarSenhaMock}
        />,
      );
      const icone = componente.getByTestId('icone-olho-fechado');
      fireEvent.click(icone);
      expect(handleMostrarSenhaMock).toHaveBeenCalledTimes(1);
    });

    test('DEVE chamar a função "handleMostrarSenha" com o valor "true" QUANDO clicar no icone de "olho fechado"', () => {
      componente.rerender(
        <Input
          label={labelmock}
          tipo="password"
          handleMostrarSenha={handleMostrarSenhaMock}
        />,
      );
      const icone = componente.getByTestId('icone-olho-fechado');
      fireEvent.click(icone);
      expect(handleMostrarSenhaMock).toHaveBeenCalledWith(true);
    });

    test('DEVE chamar a função "handleMostrarSenha" com o valor "false" QUANDO clicar no icone de "olho aberto"', () => {
      componente.rerender(
        <Input
          label={labelmock}
          tipo="password"
          deveMostrarSenha={true}
          handleMostrarSenha={handleMostrarSenhaMock}
        />,
      );
      const icone = componente.getByTestId('icone-olho-aberto');
      fireEvent.click(icone);
      expect(handleMostrarSenhaMock).toHaveBeenCalledWith(false);
    });
  });
});
