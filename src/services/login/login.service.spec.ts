import {api} from 'infrastructure/api';
import {ILoginRequest} from 'infrastructure/api/schemas/request';
import {ILoginResponse} from 'infrastructure/api/schemas/response';
import {login} from 'services/login';

jest.mock('infrastructure/api', () => {
  return {
    api: {
      post: jest.fn(),
    },
  };
});

const apiMock = api as jest.Mocked<typeof api>;

describe('LoginService', () => {
  const loginMock: ILoginRequest = {
    email: 'email@teste.com',
    password: 'senha',
  };

  beforeEach(() => {
    apiMock.post.mockClear();
  });

  test('DEVE retornar dados de login quando a resposta da API for bem-sucedida', async () => {
    const esperado: ILoginResponse = {
      auth: true,
      accessToken: 'token',
      refreshToken: {
        id: 'id',
        expiresIn: 3600,
        usuarioId: 'usuarioId',
      },
    };

    apiMock.post.mockResolvedValue({data: esperado});

    const resposta = await login(loginMock);

    expect(resposta).toEqual(esperado);
  });

  test('DEVE retornar uma mensagem quando a resposta da API contiver uma mensagem', async () => {
    const esperado: ILoginResponse = {
      auth: false,
      accessToken: '',
      refreshToken: {
        id: '',
        expiresIn: 0,
        usuarioId: '',
      },
      mensagem: 'Erro de autenticação',
    };

    apiMock.post.mockResolvedValue({data: esperado});

    const resposta = await login(loginMock);

    expect(resposta).toEqual(esperado);
  });

  test('DEVE lançar um erro quando a API falhar', async () => {
    apiMock.post.mockRejectedValue(new Error('Erro de API'));

    await expect(login(loginMock)).rejects.toThrow('Erro de API');
  });

  test('DEVE retornar Erro conforme resposta da api', async () => {
    const esperado = {
      status: 500,
      erros: [{codigo: 'Erro generico', mensagem: 'Erro generico'}],
    };

    apiMock.post.mockResolvedValue({data: esperado});

    const resposta = await login({
      email: '',
      password: '',
    });

    expect(resposta).toEqual(esperado);
  });
});
