import React, {
  HTMLInputTypeAttribute,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

import * as S from './input.styles';

type EyeIconProps = {
  isVisible: boolean;
  toggleVisibility: () => void;
};

type Props = S.PropsInput & {
  testId?: string;
  label?: string;
  corlabel?: string;
  value?: string;
  tipo?: HTMLInputTypeAttribute;
  comIcone?: boolean;
  deveMostrarSenha?: boolean;
  handleMostrarSenha?: (x: boolean) => void;
};

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    testId,
    label,
    tipo = 'text',
    corlabel,
    comIcone = true,
    deveMostrarSenha,
    handleMostrarSenha,
  } = props;

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const tipoPassword = tipo === 'password';
  const tipoInput = tipoPassword ? (mostrarSenha ? 'text' : 'password') : tipo;

  useEffect(() => {
    if (deveMostrarSenha !== undefined) {
      setMostrarSenha(deveMostrarSenha);
    }
  }, [deveMostrarSenha]);

  const togglePasswordVisivel = () => {
    setMostrarSenha(!mostrarSenha);
    handleMostrarSenha?.(!mostrarSenha);
  };

  return (
    <S.Container>
      <S.ContainerInput data-testid={testId ?? 'input-pardao'}>
        <S.LabelBox data-testid={testId ? testId + '-label' : 'input-label'}>
          <S.TextoLabel cor={corlabel}>{label}</S.TextoLabel>
          <S.ContainerInputBox>
            <S.Input
              data-testid="input-padrao-box"
              type={tipoInput}
              {...props}
              ref={ref}
            />
            {comIcone && tipoPassword && (
              <S.MostrarSenha>
                <EyeIcon
                  isVisible={mostrarSenha}
                  toggleVisibility={togglePasswordVisivel}
                />
              </S.MostrarSenha>
            )}
          </S.ContainerInputBox>
        </S.LabelBox>
      </S.ContainerInput>
    </S.Container>
  );
});

Input.displayName = 'Input';

const EyeIcon: React.FC<EyeIconProps> = ({isVisible, toggleVisibility}) => {
  return (
    <FontAwesomeIcon
      data-testid={isVisible ? 'icone-olho-aberto' : 'icone-olho-fechado'}
      icon={isVisible ? faEye : faEyeSlash}
      onClick={toggleVisibility}
    />
  );
};
