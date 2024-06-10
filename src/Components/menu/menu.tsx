import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {TextH2} from 'Components/ui/text';
import {useAuthenticatorContext} from 'context/authetication';
import {Roles} from 'types/enuns';
import colors from 'resources/colors';
import rotas from 'types/rotasAPP';
import * as S from './menu.styles';

export type Props = S.PropsMenu & {
  handleLogout: () => void;
};

export const Menu = (props: Props) => {
  const {handleLogout} = props;
  const navigate = useNavigate();
  const {usuario} = useAuthenticatorContext();
  const [telaAtiva, setTelaAtiva] = useState<string>(rotas.AdminPage);

  const handleNavegate = (item: string) => {
    setTelaAtiva(item);
    navigate(item);
  };

  return (
    <S.ContainerNav data-testid={'test_menu'}>
      <S.ContainerContent data-testid={'test_containerContent'}>
        {usuario?.role === Roles.ADMIN && (
          <>
            <S.ItemNav
              isActive={telaAtiva === rotas.AdminPage}
              onClick={() => {
                handleNavegate(rotas.AdminPage);
              }}>
              {telaAtiva === rotas.AdminPage ? (
                <TextH2 peso="bold" cursor="default">
                  Página Administrativa
                </TextH2>
              ) : (
                <TextH2 cursor="pointer" cor={colors.lightgray}>
                  Página Administrativa
                </TextH2>
              )}
            </S.ItemNav>
            <S.ItemNav
              isActive={telaAtiva === rotas.UserPage}
              onClick={() => {
                handleNavegate(rotas.UserPage);
              }}>
              {telaAtiva === rotas.UserPage ? (
                <TextH2 peso="bold" cursor="default">
                  Página Usuario
                </TextH2>
              ) : (
                <TextH2 cursor="pointer" cor={colors.lightgray}>
                  Página Usuario
                </TextH2>
              )}
            </S.ItemNav>
          </>
        )}
        <S.ItemNav
          onClick={() => {
            handleLogout();
          }}>
          <TextH2 cursor="pointer" cor={colors.lightgray}>
            Logout
          </TextH2>
        </S.ItemNav>
      </S.ContainerContent>
    </S.ContainerNav>
  );
};
