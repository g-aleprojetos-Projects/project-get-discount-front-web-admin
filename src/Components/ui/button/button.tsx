import React from 'react';
import * as S from './button.styles';

type Props = S.PropsButton & {
  testId?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  aoPressionar?: () => void;
};

export const Button = (props: Props) => {
  const {testId, disabled, tipo, cor, children, aoPressionar} = props;

  return (
    <S.Container data-testid={testId ?? 'bnt-pardao'}>
      <S.ContainerButton
        data-testid={`${testId ? testId + '-button' : 'bnt-pardao-button'}`}
        cor={cor}
        tipo={tipo}
        type={tipo === 'submit' ? 'submit' : 'button'}
        disabled={disabled}
        onClick={aoPressionar}>
        {children}
      </S.ContainerButton>
    </S.Container>
  );
};
