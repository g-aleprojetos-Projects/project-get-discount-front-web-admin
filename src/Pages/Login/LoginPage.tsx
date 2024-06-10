import React, {useCallback, useEffect} from 'react';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useAuthenticatorContext} from 'context/authetication';
import {useForm} from 'react-hook-form';
import {useLogin} from 'hooks/useLogin';
import {useNavigate} from 'react-router-dom';
import rotasAPP from 'types/rotasAPP';
import {Input} from 'Components/ui/input';
import {Roles} from 'types/enuns';
import logo from 'assets/image/logo.svg';
import * as S from './LoginPage.styles';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type LoginSchema = z.infer<typeof loginSchema>;

export const LoginPage = () => {
  const navigate = useNavigate();
  const {autenticado, usuario} = useAuthenticatorContext();
  const {register, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const {obter} = useLogin();

  const handleSubmitLogin = useCallback(
    (data: LoginSchema) => {
      const {email, password} = data;
      obter({email, password});
    },
    [obter],
  );

  const handleSubmitLogin1 = useCallback(() => {
    obter({email: 'g.aleprojetos@gmail.com', password: '639010'});
  }, [obter]);

  const handleEsqueceuSenha = useCallback(() => {
    navigate(rotasAPP.RecoverPasswordPage);
  }, [navigate]);

  useEffect(() => {
    if (autenticado) {
      usuario?.role === Roles.ADMIN
        ? navigate(rotasAPP.AdminPage)
        : navigate(rotasAPP.UserPage);
    }
  }, [autenticado, navigate, usuario]);

  return (
    <S.Main data-testid={'loginPage'}>
      <S.ContainerLogin>
        <S.Form onSubmit={handleSubmit(handleSubmitLogin)}>
          <S.Imagem data-testid={'test_image_logo'} src={logo} />
          <S.TextoTitulo>LOGIN</S.TextoTitulo>
          <Input
            testId="input-email"
            label="Seu email"
            tipo="email"
            autoComplete="on"
            placeholder="contato@email.com"
            {...register('email')}
          />
          <Input
            testId="input-senha"
            label="Sua senha"
            tipo="password"
            autoComplete="off"
            placeholder="********"
            {...register('password')}
          />
          <S.ContainerRecuperarSenha>
            <S.ContainerBotaoRecuperaSenha
              data-testid={'botao-recuperar-senha'}
              aoPressionar={handleEsqueceuSenha}>
              <S.TextoRecuperarSenha>Esqueceu sua senha?</S.TextoRecuperarSenha>
            </S.ContainerBotaoRecuperaSenha>
          </S.ContainerRecuperarSenha>
          <S.BotaoEnviar testId="bnt-login">
            <S.TextoBotao>Logar</S.TextoBotao>
          </S.BotaoEnviar>
        </S.Form>
        <button onClick={handleSubmitLogin1}>Teste</button>
      </S.ContainerLogin>
    </S.Main>
  );
};
