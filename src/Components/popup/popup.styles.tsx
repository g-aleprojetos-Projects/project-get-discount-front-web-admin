import styled from 'styled-components';
import colors from 'resources/colors';
import {TextH2} from 'Components/ui/text';
import sizes from 'resources/sizes';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faXmark} from '@fortawesome/free-solid-svg-icons';

export const Cabecalho = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: ${sizes.large}px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.black50per};
`;

export const PopupBotao = styled.div`
  display: flex;
  margin-top: ${sizes.small}px;
`;

export const PopupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 13px;
  border-radius: 13px;
  background-color: ${colors.white};
`;

export const Principal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 21px;
  padding-right: 21px;
  gap: ${sizes.xsmall}px;
`;

export const Texto = styled(TextH2).attrs({
  cursor: 'pointer',
})``;

export const iconeFechar = styled(FontAwesomeIcon).attrs({
  icon: faXmark,
  height: 32,
  width: 32,
  size: 'xl',
})`
  margin-right: ${sizes.xsmall}px;
  margin-top: ${sizes.xxsmall}px;
  cursor: pointer;
`;

export const Icone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
