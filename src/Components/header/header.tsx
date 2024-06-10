import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Popup} from 'Components/popup';
import {Nav} from 'Components/nav/nav';
import {useAuthenticatorContext} from 'context/authetication';
import {ILoginResponse} from 'infrastructure/api/schemas/response';
import rotas from 'types/rotasAPP';
import colors from 'resources/colors';
import * as S from './header.styles';

export const Header = () => {
  const navigate = useNavigate();
  const {handleAutenticado} = useAuthenticatorContext();
  const [openLogout, setOpenLogout] = useState<boolean>(false);
  const handleLogout = () => {
    setOpenLogout(prev => !prev);
  };

  const handleOnConfirmarLogout = () => {
    handleLogout();
    navigate(rotas.LoginPage);
    localStorage.clear();
    const logOut: ILoginResponse = {
      auth: false,
      accessToken: '',
      refreshToken: {id: '', expiresIn: 0, usuarioId: ''},
    };
    handleAutenticado(logOut);
  };

  return (
    <>
      <S.ContainerHeader data-testid={'test_header'}>
        <S.ContainerContent>
          <Nav handleLogout={handleLogout} />
        </S.ContainerContent>
      </S.ContainerHeader>
      {openLogout && (
        <Popup
          textTitle="Deseja fazer Logout?"
          aoSair={handleLogout}
          botaoConfirmar={{
            legenda: 'Confirmar',
            corTexto: colors.white,
            corBotao: colors.caribbeanGreen,
            aoClicar: () => {
              handleOnConfirmarLogout();
            },
          }}
          botaoCancelar={{
            legenda: 'Cancelar',
            corTexto: colors.white,
          }}></Popup>
      )}
    </>
  );
};
