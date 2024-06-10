import styled from 'styled-components';
import {TextH1, TextH2} from 'Components/ui/text';

export interface Props {
  colorTitle?: string;
  colorMessege?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
`;

export const ContainerTexto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
`;

export const TextTitle = styled(TextH1).attrs({
  peso: 'bold',
})<Props>`
  color: ${props => props.colorTitle};
`;
export const TextMessege = styled(TextH2)<Props>`
  color: ${props => props.colorMessege};
  text-align: center;
`;
