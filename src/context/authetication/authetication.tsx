import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from 'react';
import {jwtDecode} from 'jwt-decode';
import {Roles} from 'types/enuns';
import {IUser} from 'types/interfaces';
import {ILoginResponse} from 'infrastructure/api/schemas/response';

interface IAccessToken {
  unique_name: string;
  sub: string;
  role: Roles;
  exp: number;
  iat: number;
}

type AutenticadorContext = {
  autenticado: boolean;
  usuario: IUser | undefined;
  handleAutenticado: (_item: ILoginResponse) => void;
};

type BackgroundProvider = {
  children: ReactNode;
};

export const AutenticadoContext = createContext({} as AutenticadorContext);

export const AutenticadoProvide = ({children}: BackgroundProvider) => {
  const [usuario, setUsuario] = useState<IUser>();
  const [autenticado, setAutenticado] = useState<boolean>(false);

  const handleAutenticado = (token: ILoginResponse) => {
    if (token.accessToken) {
      const accessToken: IAccessToken = jwtDecode(token.accessToken);
      setUsuario({
        id: accessToken.sub,
        nome: accessToken.unique_name,
        role: accessToken.role,
      });
      localStorage.setItem('token', JSON.stringify(accessToken));
      localStorage.setItem(
        'user',
        JSON.stringify({nome: accessToken.unique_name, role: accessToken.role}),
      );
    }
    setAutenticado(isAuthenticated());
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    try {
      const {exp} = JSON.parse(token) as IAccessToken;
      if (!exp) {
        return false;
      }

      const expirationDate = new Date(exp * 1000);
      if (expirationDate < new Date()) {
        return false;
      }

      return true;
    } catch (e) {
      return false;
    }
  };

  // Verifica a autenticação quando o aplicativo é inicializado
  useEffect(() => {
    setAutenticado(isAuthenticated());
  }, [autenticado]);

  const n = localStorage.getItem('numero');
  if (n === null) {
    localStorage.setItem('numero', JSON.stringify(1));
  } else {
    localStorage.setItem('numero', JSON.stringify(n + 1));
  }
  console.log('autenticado: ', autenticado);
  return (
    <AutenticadoContext.Provider
      value={{
        autenticado,
        usuario,
        handleAutenticado,
      }}>
      {children}
    </AutenticadoContext.Provider>
  );
};

export function useAuthenticatorContext() {
  return useContext(AutenticadoContext);
}
