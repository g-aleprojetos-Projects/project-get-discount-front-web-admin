import styled from 'styled-components';
import colors from 'resources/colors';
import logo from 'assets/icon/logo.svg';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerLogo = styled.div`
  position: static;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 89px;
  color: ${colors.white};
  padding: 0 8px 0 89px;
`;

export const Logo = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${logo});
  background-repeat: no-repeat;
`;
