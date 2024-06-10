import styled from 'styled-components';
import colors from 'resources/colors';
import {TextH4} from 'Components/ui/text';

export type PropsInput = React.InputHTMLAttributes<HTMLInputElement>;

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ContainerInputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 2px;
  border: 1px solid ${colors.shuttleGray};
  background-color: ${colors.white};
`;

export const LabelBox = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled.input`
  display: flex;
  height: 30px;
  width: 100%;
  padding: 8px 0;
  text-indent: 8px;
  font-size: 16px;
  border: none;
  background-color: ${colors.white};
  color: ${colors.black};
  outline: 0;
`;

export const MostrarSenha = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const TextoLabel = styled(TextH4).attrs({
  cursor: 'pointer',
})``;
