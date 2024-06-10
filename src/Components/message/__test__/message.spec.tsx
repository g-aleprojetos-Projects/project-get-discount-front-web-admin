import React from 'react';
import '@testing-library/jest-dom';
import {render, RenderResult} from '@testing-library/react';
import {Message} from '..';

describe('Message', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(
      <Message textTitle="Texto titulo" textMessage="texto da mensagem" />,
    );
  });

  describe('Renderização', () => {
    test('DEVE renderizar o componente "Message"', () => {
      const message = componente.getByTestId('message-pardao');
      expect(message).toBeDefined();
    });

    test('DEVE renderizar o componente "Message" com o texto do titulo', () => {
      const message = componente.getByText('Texto titulo');
      expect(message).toBeDefined();
    });

    test('DEVE renderizar o componente "Message" com o texto da mensagem', () => {
      const message = componente.getByText('texto da mensagem');
      expect(message).toBeDefined();
    });

    test('DEVE renderizar o componente "Message" com o texto do titulo com a cor padrão', () => {
      const message = componente.getByText('Texto titulo');
      expect(message).toHaveStyle('color: #000000');
    });

    test('DEVE renderizar o componente "Message" com o texto da mensagem com a cor padrão', () => {
      const message = componente.getByText('texto da mensagem');
      expect(message).toHaveStyle('color: #000000');
    });

    test('DEVE renderizar o componente "Message" com o texto do titulo com a cor passada', () => {
      componente.rerender(
        <Message
          textTitle="Texto titulo"
          textMessage="texto da mensagem"
          colorTitle="red"
        />,
      );
      const message = componente.getByText('Texto titulo');
      expect(message).toHaveStyle('color: red');
    });

    test('DEVE renderizar o componente "Message" com o texto da mensagem com a cor passada', () => {
      componente.rerender(
        <Message
          textTitle="Texto titulo"
          textMessage="texto da mensagem"
          colorMessege="red"
        />,
      );
      const message = componente.getByText('texto da mensagem');
      expect(message).toHaveStyle('color: red');
    });

    test('DEVE renderizar o componente "Message" sem o "titulo" QUANDO não for passado', () => {
      componente.rerender(<Message textMessage="texto da mensagem" />);
      const message = componente.queryByText('Texto titulo');
      expect(message).toBeNull();
    });

    test('DEVE renderizar o componente "Message" sem o "titulo" QUANDO não for passado', () => {
      componente.rerender(<Message textTitle="Texto titulo" />);
      const message = componente.queryByText('texto da mensagem');
      expect(message).toBeNull();
    });
  });
});
