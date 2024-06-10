import {renderHook, act} from '@testing-library/react-hooks';
import {useLogin} from './useLogin';
import {login as loginService} from 'services/login';
import {ILoginResponse} from 'infrastructure/api/schemas/response';

const login = loginService as jest.MockedFunction<typeof loginService>;

jest.mock('services/login');

describe('useLogin', () => {
  const mockResponse = {
    auth: true,
    accessToken: 'token',
    refreshToken: {
      id: 'id',
      expiresIn: 3600,
      usuarioId: 'usuarioId',
    },
  };

  beforeEach(() => {
    login.mockClear();
  });

  test('deve retornar os dados corretos ao realizar login com sucesso', async () => {
    login.mockResolvedValue(mockResponse);

    const {result, waitForNextUpdate} = renderHook(() => useLogin());

    act(() => {
      result.current.obter({email: 'email@teste.com', password: 'senha'});
    });

    await waitForNextUpdate();

    expect(result.current.error).toBeUndefined();
    expect(result.current.loading).toBe(false);
  });

  test('deve retornar uma mensagem de erro ao falhar o login', async () => {
    login.mockRejectedValue(new Error('Erro de autenticação'));

    const {result, waitForNextUpdate} = renderHook(() => useLogin());

    act(() => {
      result.current.obter({email: 'email@teste.com', password: 'senha'});
    });

    await waitForNextUpdate();

    expect(result.current.error).toEqual({
      codigo: 'ERRO',
      mensagem: 'Error: Erro de autenticação',
    });
    expect(result.current.loading).toBe(false);
  });

  test('deve retornar Erro conforme resposta da api', async () => {
    const mockErrorResponse: ILoginResponse = {
      mensagem: 'Erro generico',
      auth: false,
      accessToken: '',
      refreshToken: undefined,
    };

    login.mockResolvedValue(mockErrorResponse);

    const {result, waitForNextUpdate} = renderHook(() => useLogin());

    act(() => {
      result.current.obter({email: '', password: ''});
    });

    await waitForNextUpdate();

    expect(result.current.error).toBeUndefined();
    expect(result.current.loading).toBe(false);
  });
});
