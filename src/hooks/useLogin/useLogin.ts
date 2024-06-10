import {useCallback, useState} from 'react';
import {login} from 'services/login';
import {IError, IErrorResponse, ILogin} from 'types/interfaces';
import {useAuthenticatorContext} from 'context/authetication';
import {AxiosError} from 'axios';

export function useLogin() {
  const [error, setError] = useState<IError | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const {handleAutenticado} = useAuthenticatorContext();

  const handleError = (err: AxiosError) => {
    const error = err as AxiosError;
    if (error.response?.status === 400) {
      const erro = error.response?.data as IErrorResponse;
      const codigoErro = erro.erros[0].codigo;
      const mensagemErro = erro.erros[0].mensagem;
      setError({
        codigo: codigoErro,
        mensagem: mensagemErro,
      });
    } else if (error.response?.status === 500) {
      setError({
        codigo: 'err500',
        mensagem: 'Servidor não responde',
      });
    } else {
      setError({
        codigo: 'err001',
        mensagem: 'Erro desconhecido',
      });
    }
  };

  const obter = useCallback(
    async (loginState: ILogin) => {
      setLoading(true);
      try {
        const response = await login(loginState);
        handleAutenticado(response);
        setError(undefined);
      } catch (err) {
        const error = err as AxiosError;
        handleError(error);
      } finally {
        setLoading(false);
      }
    },
    [handleAutenticado],
  );

  return {obter, error, loading};
}
