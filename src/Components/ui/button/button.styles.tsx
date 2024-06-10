import styled from 'styled-components';
import colors from 'resources/colors';

export interface PropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tipo?: 'text' | 'fechar' | 'cancelar' | 'confirmar' | 'ok' | 'submit';
  cor?: string;
}

export const Container = styled.div`
  margin: 15px;
`;

export const ContainerButton = styled.button<PropsButton>`
  min-width: 200px;
  background-color: ${props =>
    props.cor ||
    (props.tipo === 'cancelar'
      ? colors.red
      : props.tipo === 'confirmar'
      ? colors.caribbeanGreen
      : colors.blue)};
  border-radius: ${props => (props.tipo === 'fechar' ? 'none' : '8px')};
  border: none;
  padding: ${props =>
    props.tipo === 'fechar' || props.tipo === 'text' ? 'none' : '8px 60px'};
  cursor: pointer;
`;
