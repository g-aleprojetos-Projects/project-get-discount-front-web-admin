import React, {useCallback, useState} from 'react';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Input} from 'Components/ui/input';
import * as S from './RegisterPasswordPage.styles';

const loginSchema = z.object({
  senha: z.string().min(8),
  confirmarSenha: z.string().min(8),
});

type LoginSchema = z.infer<typeof loginSchema>;

export const RegisterPasswordPage = () => {
  const {register, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const handleSubmitRegisterPassword = useCallback((data: LoginSchema) => {
    console.log(data);
  }, []);

  return (
    <S.Main data-testid={'registerPasswordPage'}>
      <S.ContainerEsquerda />
      <S.ContainerDireita>
        <S.Form onSubmit={handleSubmit(handleSubmitRegisterPassword)}>
          <S.ContainerTitulo>
            <S.TextoTitulo data-testid={'texto-titulo'}>
              Definir nova senha
            </S.TextoTitulo>
          </S.ContainerTitulo>
          <Input
            testId="input-nova-senha"
            label="Insira sua nova senha"
            tipo="password"
            comIcone={false}
            deveMostrarSenha={mostrarSenha}
            autoComplete="off"
            placeholder="********"
            {...register('senha')}
          />
          <Input
            testId="input-confirmar-senha"
            label="Confirme sua nova senha"
            tipo="password"
            handleMostrarSenha={setMostrarSenha}
            autoComplete="off"
            placeholder="********"
            {...register('confirmarSenha')}
          />
          <S.BotaoEnviar testId="bnt-redefinir-senha">
            <S.TextoBotao>Definir nova senha</S.TextoBotao>
          </S.BotaoEnviar>
        </S.Form>
      </S.ContainerDireita>
    </S.Main>
  );
};
