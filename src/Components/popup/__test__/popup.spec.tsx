import React from 'react';
import '@testing-library/jest-dom';
import {fireEvent, render, RenderResult} from '@testing-library/react';
import {Popup} from '..';
import iconeCheckSvg from 'assets/icon/check.svg';
import colors from 'resources/colors';

describe('Popup', () => {
  let componente: RenderResult;
  const handleAoTocarMock = jest.fn();
  const handleAoTocarSairMock = jest.fn();

  describe('Renderização', () => {
    describe('QUANDO o popup for do tipo "ok"', () => {
      beforeEach(() => {
        componente = render(
          <Popup
            textTitle="Texto titulo"
            textMessage="texto da mensagem"
            aoSair={handleAoTocarSairMock}
            botaoOk={{
              legenda: 'OK',
              aoClicar: handleAoTocarMock,
            }}
          />,
        );
      });
      test('DEVE renderizar o componente "Popup"', () => {
        const message = componente.getByTestId('popup-padrao');
        expect(message).toBeDefined();
      });

      test('DEVE renderizar o componente "Popup" com o texto do titulo', () => {
        const message = componente.getByText('Texto titulo');
        expect(message).toBeDefined();
      });

      test('DEVE renderizar o componente "Popup" com o texto da mensagem', () => {
        const message = componente.getByText('texto da mensagem');
        expect(message).toBeDefined();
      });

      test('DEVE renderizar o botão de OK', () => {
        const botao = componente.getByTestId('botao-ok');
        expect(botao).toBeDefined();
      });

      test('DEVE renderizar o icone de fechar', () => {
        const icone = componente.getByTestId('icone-fechar');
        expect(icone).toBeDefined();
      });

      test('DEVE renderizar o texto do botão em "medium"', () => {
        const texto = componente.getByText('OK');
        expect(texto).toHaveStyle('font-family: AvertaStd-Regular');
      });
    });

    test('DEVE renderizar o texto do botão em negrito', () => {
      componente = render(
        <Popup
          textTitle="Texto titulo"
          textMessage="texto da mensagem"
          aoSair={handleAoTocarSairMock}
          botaoOk={{
            legenda: 'OK',
            negrito: true,
            aoClicar: handleAoTocarMock,
          }}
        />,
      );
      const texto = componente.getByText('OK');
      expect(texto).toHaveStyle('font-family: AvertaStd-Bold');
    });

    test('DEVE renderizar o componente filho QUANDO for passado um componente filho', () => {
      componente = render(
        <Popup
          textTitle="Texto titulo"
          textMessage="texto da mensagem"
          aoSair={handleAoTocarSairMock}
          botaoOk={{
            legenda: 'OK',
            aoClicar: handleAoTocarMock,
          }}>
          <p>Componente filho</p>
        </Popup>,
      );
      const componenteFilho = componente.getByText('Componente filho');
      expect(componenteFilho).toBeDefined();
    });

    describe('QUANDO o poupup for do tipo "confirmar" e "Cancelar"', () => {
      beforeEach(() => {
        componente = render(
          <Popup
            textTitle="Texto titulo"
            textMessage="texto da mensagem"
            aoSair={handleAoTocarSairMock}
            botaoConfirmar={{
              legenda: 'Enviar',
              corTexto: colors.white,
              corBotao: colors.caribbeanGreen,
              aoClicar: handleAoTocarMock,
            }}
            botaoCancelar={{
              legenda: 'Cancelar',
              corTexto: colors.white,
              corBotao: colors.red,
            }}
          />,
        );
      });

      test('DEVE renderizar o componente "Popup" com o texto do titulo', () => {
        const message = componente.getByText('Texto titulo');
        expect(message).toBeDefined();
      });

      test('DEVE renderizar o componente "Popup" com o texto da mensagem', () => {
        const message = componente.getByText('texto da mensagem');
        expect(message).toBeDefined();
      });

      test('DEVE renderizar o botão de cancelar', () => {
        const botao = componente.getByTestId('botao-cancelar');
        expect(botao).toBeDefined();
      });

      test('DEVE renderizar o botão de confirmar', () => {
        const botao = componente.getByTestId('botao-confirmar');
        expect(botao).toBeDefined();
      });

      test('DEVE renderizar o icone de fechar', () => {
        const icone = componente.getByTestId('icone-fechar');
        expect(icone).toBeDefined();
      });

      test('DEVE renderizar o botão de cancelar', () => {
        const botao = componente.getByTestId('botao-cancelar');
        expect(botao).toBeDefined();
      });

      test('DEVE renderizar o botão de confirmar', () => {
        const botao = componente.getByTestId('botao-confirmar');
        expect(botao).toBeDefined();
      });

      test('DEVE renderizar o icone de fechar', () => {
        const icone = componente.getByTestId('icone-fechar');
        expect(icone).toBeDefined();
      });

      test('DEVE renderizar o botão de cancelar com o texto "Cancelar"', () => {
        const botao = componente.getByText('Cancelar');
        expect(botao).toBeDefined();
      });

      test('DEVE renderizar o botão de confirmar com o texto "OK"', () => {
        const botao = componente.getByText('Enviar');
        expect(botao).toBeDefined();
      });

      test('DEVE renderizar o botão de cancelar com a cor de fundo "red"', () => {
        const botao = componente.getByTestId(
          'botao-cancelar-button',
        ) as HTMLButtonElement;
        expect(botao).toHaveStyle('background-color: #f4715D');
      });

      test('DEVE renderizar o botão de confirmar com a cor de fundo "green"', () => {
        const botao = componente.getByTestId(
          'botao-confirmar-button',
        ) as HTMLButtonElement;
        expect(botao).toHaveStyle('background-color: #04C582');
      });

      test('DEVE renderizar o botão de "Cancelar" com a cor do texto "white"', () => {
        const botao = componente.getByText('Cancelar');
        expect(botao).toHaveStyle('color: #FFFFFF');
      });

      test('DEVE renderizar o botão de "Enviar" com a cor do texto "white"', () => {
        const botao = componente.getByText('Enviar');
        expect(botao).toHaveStyle('color: #FFFFFF');
      });
    });

    describe('QUANDO for passado um icone', () => {
      beforeEach(() => {
        componente = render(
          <Popup
            textTitle="Texto titulo"
            textMessage="texto da mensagem"
            icone={iconeCheckSvg}
            aoSair={handleAoTocarSairMock}
            botaoConfirmar={{
              legenda: 'Enviar',
              corTexto: colors.white,
              corBotao: colors.caribbeanGreen,
              aoClicar: handleAoTocarMock,
            }}
            botaoCancelar={{
              legenda: 'Cancelar',
              corTexto: colors.white,
              corBotao: colors.red,
            }}
          />,
        );
      });

      test('DEVE renderizar o icone', () => {
        const icone = componente.getByTestId('icone-cabecalho');
        expect(icone).toBeDefined();
      });

      test('DEVE renderizar o icone correto', () => {
        const icone = componente.getByTestId('icone-cabecalho');
        expect(icone).toContainHTML('check.svg');
      });
    });
  });

  describe('Comportamento', () => {
    beforeEach(() => {
      componente = render(
        <Popup
          textTitle="Texto titulo"
          textMessage="texto da mensagem"
          aoSair={handleAoTocarSairMock}
          botaoConfirmar={{
            legenda: 'Enviar',
            corTexto: colors.white,
            corBotao: colors.caribbeanGreen,
            aoClicar: handleAoTocarMock,
          }}
          botaoCancelar={{
            legenda: 'Cancelar',
            corTexto: colors.white,
            corBotao: colors.red,
          }}
        />,
      );
    });

    test('DEVE chamar a função "aoTocar" QUANDO o botão de "Cancelar" for clicado', () => {
      const botao = componente.getByTestId('botao-cancelar-button');
      fireEvent.click(botao);
      expect(handleAoTocarSairMock).toBeCalledTimes(1);
    });

    test('DEVE chamar a função "aoTocar" QUANDO o botão de "Enviar" for clicado', () => {
      const botao = componente.getByTestId('botao-confirmar-button');
      fireEvent.click(botao);
      expect(handleAoTocarMock).toBeCalledTimes(1);
    });

    test('DEVE chamar a função "aoTocar" QUANDO o botão de "Fechar" for clicado', () => {
      const botao = componente.getByTestId('icone-fechar');
      fireEvent.click(botao);
      expect(handleAoTocarSairMock).toBeCalledTimes(1);
    });

    describe('QUANDO o popup for do tipo "ok"', () => {
      beforeEach(() => {
        componente.rerender(
          <Popup
            textTitle="Texto titulo"
            textMessage="texto da mensagem"
            aoSair={handleAoTocarSairMock}
            botaoOk={{
              legenda: 'OK',
              aoClicar: handleAoTocarMock,
            }}
          />,
        );
      });

      test('DEVE chamar a função "aoTocar" QUANDO o botão de "OK" for clicado', () => {
        const botao = componente.getByTestId('botao-ok-button');
        fireEvent.click(botao);
        expect(handleAoTocarMock).toBeCalledTimes(1);
      });

      test('DEVE chamar a função "aoTocar" QUANDO o botão de "Fechar" for clicado', () => {
        const botao = componente.getByTestId('icone-fechar');
        fireEvent.click(botao);
        expect(handleAoTocarSairMock).toBeCalledTimes(1);
      });
    });
  });
});
