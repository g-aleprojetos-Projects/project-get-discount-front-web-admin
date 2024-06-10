import React from 'react';
import {Menu} from 'Components/menu';
import * as S from './nav.styles';

export type Props = {
  handleLogout: () => void;
};

export const Nav = (props: Props) => {
  const {handleLogout} = props;
  return (
    <S.Container data-testid={'test_nav'}>
      <S.ContainerLogo>
        <S.Logo data-testid={'test_logo'} />
      </S.ContainerLogo>
      <Menu handleLogout={handleLogout} />
    </S.Container>
  );
};
