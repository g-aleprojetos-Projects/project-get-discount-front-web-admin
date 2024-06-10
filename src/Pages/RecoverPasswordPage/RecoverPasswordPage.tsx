import React, {useCallback} from 'react';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import {Input} from 'Components/ui/input';
import * as S from './RecoverPasswordPage.styles';
import rotasAPP from 'types/rotasAPP';

const loginSchema = z.object({
  email: z.string().email(),
});

type LoginSchema = z.infer<typeof loginSchema>;

export const RecoverPasswordPage = () => {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const handleSubmitLogin = useCallback((data: LoginSchema) => {
    console.log('login');
    console.log(data);
  }, []);

  const handleVoltarTelaLogin = useCallback(() => {
    navigate(rotasAPP.LoginPage);
  }, [navigate]);

  return (
    <S.Main data-testid={'recoverPasswordPage'}>
      <S.ContainerEsquerda />
      <S.ContainerDireita>
        <S.Form onSubmit={handleSubmit(handleSubmitLogin)}>
          <S.ContainerTitulo>
            <S.TextoTitulo>Recuperar senha</S.TextoTitulo>
            <S.TextoSubtitulo>
              Vamos enviar a recuperação de senha por e-mail.
            </S.TextoSubtitulo>
          </S.ContainerTitulo>
          <Input
            testId="input-email"
            tipo="email"
            autoComplete="on"
            placeholder="contato@email.com"
            {...register('email')}
          />
          <S.BotaoEnviar testId="bnt-recuperar-senha">
            <S.TextoBotao>recuperar minha senha</S.TextoBotao>
          </S.BotaoEnviar>
          <S.ContainerBotaoRecuperaSenha
            data-testid={'botao-recuperar-senha'}
            aoPressionar={handleVoltarTelaLogin}>
            <S.TextoRecuperarSenha>Voltar</S.TextoRecuperarSenha>
          </S.ContainerBotaoRecuperaSenha>
        </S.Form>
      </S.ContainerDireita>
    </S.Main>
  );
};
