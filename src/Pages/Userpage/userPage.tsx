import React from 'react';
import manutencao from 'assets/image/manutencao.svg';

import * as S from './userPage.styles';

export const UserPage = () => {
  return (
    <S.Container data-testid={'test_user_page'}>
      <S.Imagem data-testid={'test_image'} src={manutencao} />
    </S.Container>
  );
};
