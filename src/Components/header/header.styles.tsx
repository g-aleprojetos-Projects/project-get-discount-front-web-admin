import styled from 'styled-components';
import colors from 'resources/colors';

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 34px;
  top: 55px;
`;

export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  height: 144px;
  background-color: ${colors.lightgray};
`;

export const ContainerLogout = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.black50per};
`;
