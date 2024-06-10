import React, {useCallback} from 'react';
import {Button} from 'Components/ui/button';
import {Message} from 'Components/message';
import {PropsButton} from 'Components/ui/button/button.styles';
import * as S from './popup.styles';

type BotaoProps = {
  legenda?: string;
  aoClicar?: () => void | Promise<void>;
  corTexto?: string;
  corBotao?: string;
  negrito?: boolean;
  tipo?: PropsButton['tipo'];
};

export type Props = {
  testId?: string;
  textTitle?: string;
  textMessage?: string;
  corTextoTitulo?: string;
  corTextoMensagem?: string;
  botaoConfirmar?: BotaoProps;
  botaoCancelar?: BotaoProps;
  botaoOk?: BotaoProps;
  icone?: React.ReactNode;
  children?: React.ReactNode;
  aoSair: () => void | Promise<void>;
};

export const Popup = (props: Props) => {
  const {
    testId,
    textTitle,
    textMessage,
    corTextoTitulo,
    corTextoMensagem,
    botaoConfirmar,
    botaoCancelar,
    botaoOk,
    icone,
    children,
    aoSair,
  } = props;

  const obterPesoFonte = (negrito?: boolean) => {
    return negrito ? 'bold' : 'medium';
  };

  const handleAoSair = useCallback(() => {
    aoSair();
  }, [aoSair]);

  return (
    <S.Container data-testid={testId ?? 'popup-padrao'}>
      <S.PopupBox>
        <S.Cabecalho>
          <S.iconeFechar data-testid={'icone-fechar'} onClick={handleAoSair} />
        </S.Cabecalho>
        {icone && <S.Icone data-testid={'icone-cabecalho'}>{icone}</S.Icone>}
        <S.Principal>
          <Message
            textTitle={textTitle}
            textMessage={textMessage}
            colorTitle={corTextoTitulo}
            colorMessege={corTextoMensagem}
          />
          {children}
          {botaoOk ? (
            <S.PopupBotao>
              <Button
                testId="botao-ok"
                tipo={botaoOk.tipo ?? 'ok'}
                aoPressionar={botaoOk.aoClicar}>
                <S.Texto
                  cor={botaoOk?.corTexto}
                  peso={obterPesoFonte(Boolean(botaoOk?.negrito))}>
                  {botaoOk.legenda}
                </S.Texto>
              </Button>
            </S.PopupBotao>
          ) : (
            <S.PopupBotao>
              <Button
                testId="botao-cancelar"
                tipo={botaoCancelar?.tipo ?? 'cancelar'}
                cor={botaoCancelar?.corBotao}
                aoPressionar={handleAoSair}>
                <S.Texto
                  cor={botaoCancelar?.corTexto}
                  peso={obterPesoFonte(Boolean(botaoCancelar?.negrito))}>
                  {botaoCancelar?.legenda}
                </S.Texto>
              </Button>
              <Button
                testId="botao-confirmar"
                tipo={botaoConfirmar?.tipo ?? 'confirmar'}
                cor={botaoConfirmar?.corBotao}
                aoPressionar={botaoConfirmar?.aoClicar}>
                <S.Texto
                  cor={botaoConfirmar?.corTexto}
                  peso={obterPesoFonte(Boolean(botaoConfirmar?.negrito))}>
                  {botaoConfirmar?.legenda}
                </S.Texto>
              </Button>
            </S.PopupBotao>
          )}
        </S.Principal>
      </S.PopupBox>
    </S.Container>
  );
};
