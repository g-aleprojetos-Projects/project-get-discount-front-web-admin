import React from 'react';
import manutencao from 'assets/image/manutencao.svg';

import * as S from './notFoundPage.styles';

export const NotFoundPage = () => {
  return (
    <S.Container data-testid={'test-notFound-page'}>
      <S.Imagem data-testid={'test_image'} src={manutencao} />
    </S.Container>
  );
};
