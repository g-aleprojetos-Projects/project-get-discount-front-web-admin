import styled from 'styled-components';
import {keyframes} from 'styled-components';
import cores from 'resources/colors';
import sizes from 'resources/sizes';
import {TextH1, TextH2, TextH3} from 'Components/ui/text';
import {Button} from 'Components/ui/button';
import fundo from 'assets/image/background.svg';
import SVG from 'react-inlinesvg';

const rotate = keyframes`
  100% {
    background-position: 25% 50%;
  }
`;

export const BotaoEnviar = styled(Button).attrs({
  tipo: 'submit',
  cor: cores.CornflowerBlue,
})``;

export const ContainerBotaoRecuperaSenha = styled(Button).attrs({
  tipo: 'text',
  cor: 'transparent',
})``;

export const ContainerLogin = styled.div`
  display: flex;
  z-index: 3;
  top: 50%;
  left: 50%;
  width: 90%;
  padding: 40px 30px;
  margin: 30px;
  border-radius: 1.25rem;
  background: #ffffff;

  @media (width >= 500px) {
    width: 70%;
  }

  @media (width >= 680px) {
    align-items: center;
    overflow: auto;
    top: 0;
    right: 0;
    left: auto;
    translate: 0 0;
    margin: 0;
    width: 50%;
    height: 100vh;
    padding: 0;
    border-radius: 0;
  }
`;

export const ContainerRecuperarSenha = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-right: ${sizes.xsmall}px;
`;

export const Form = styled.form`
  display: grid;
  gap: 20px;
  place-items: center;
  width: 100%;
  margin: 0;
  padding-top: 20px;

  @media (width >= 680px) {
    margin: 0 10%;
    height: 60%;
    gap: 10px;
  }

  @media (width >= 1440px) {
    margin: 20%;
  }
`;

export const Imagem = styled(SVG)`
  width: 80px;
  height: 80px;

  @media (width >= 680px) {
    width: 100px;
    height: 100px;
  }
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${fundo});
  background-size: cover;
  animation: ${rotate} 5s infinite alternate linear;

  @media (width >= 500px) {
    padding: 0;
    justify-content: flex-end;
  }
`;

export const TextoBotao = styled(TextH2).attrs({
  cursor: 'pointer',
  cor: cores.white,
})``;

export const TextoRecuperarSenha = styled(TextH3).attrs({
  cor: cores.black,
  cursor: 'pointer',
})``;

export const TextoTitulo = styled(TextH1).attrs({
  peso: 'bold',
})``;
