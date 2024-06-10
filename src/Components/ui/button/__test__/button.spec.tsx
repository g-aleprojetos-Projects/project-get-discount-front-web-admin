import React from 'react';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {Button} from '..';

describe('Button', () => {
  let componente: RenderResult;
  const aoClicarMock = jest.fn();

  beforeEach(() => {
    componente = render(<Button aoPressionar={aoClicarMock}>Botão</Button>);
  });

  describe('Renderização', () => {
    test('DEVE renderizar o componente "Button"', () => {
      const botao = componente.getByTestId('bnt-pardao');
      expect(botao).toBeDefined();
    });

    test('DEVE renderizar o texto do "Button"', () => {
      const botao = componente.getByText('Botão');
      expect(botao).toBeDefined();
    });

    test('DEVE renderizar o botão com o tipo "button"', () => {
      const botao = componente.getByTestId(
        'bnt-pardao-button',
      ) as HTMLButtonElement;
      expect(botao.type).toBe('button');
    });

    test('DEVE renderizar o botão do tipo "submit" QUANDO for passado o "submit" no type', () => {
      componente.rerender(
        <Button tipo={'submit'} aoPressionar={aoClicarMock}>
          Botão
        </Button>,
      );
      const botao = componente.getByTestId(
        'bnt-pardao-button',
      ) as HTMLButtonElement;
      expect(botao.type).toBe('submit');
    });
  });
  describe('Comportamento', () => {
    test('DEVE chamar a função "aoPressionar" ao clicar no botão', () => {
      const botao = componente.getByText('Botão');
      fireEvent.click(botao);
      expect(aoClicarMock).toHaveBeenCalled();
    });

    test('NÃO DEVE chamar a função "aoPressionar" ao clicar no botão e o "disabled" for true', () => {
      componente.rerender(
        <Button disabled={true} aoPressionar={aoClicarMock}>
          Botão
        </Button>,
      );
      const botao = componente.getByText('Botão');
      fireEvent.click(botao);
      expect(aoClicarMock).not.toHaveBeenCalled();
    });
  });
});
