import React from 'react';
import * as S from './message.styles';

type PropsMessage = S.Props & {
  testId?: string;
  textTitle?: string;
  textMessage?: string;
};

export const Message = (props: PropsMessage) => {
  const {
    testId,
    textTitle = '',
    textMessage = '',
    colorTitle,
    colorMessege,
  } = props;
  return (
    <S.Container data-testid={testId ?? 'message-pardao'}>
      <S.ContainerTexto>
        <S.TextTitle colorTitle={colorTitle}>{textTitle}</S.TextTitle>
      </S.ContainerTexto>
      <S.ContainerTexto>
        <S.TextMessege colorMessege={colorMessege}>{textMessage}</S.TextMessege>
      </S.ContainerTexto>
    </S.Container>
  );
};
