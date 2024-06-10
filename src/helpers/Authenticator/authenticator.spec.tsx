import {useAuthenticator} from './authenticator';

const getItemMock = jest.fn();
const mockStorage = {
  length: 0,
  key: jest.fn(),
  getItem: getItemMock,
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: mockStorage,
});

describe('useAuthenticator', () => {
  afterEach(() => {
    getItemMock.mockClear();
  });

  it('DEVE retornar true se o usuário estiver no localStorage', () => {
    getItemMock.mockReturnValue('user');
    const autenticado = useAuthenticator();
    expect(autenticado).toBe(true);
    expect(localStorage.getItem).toHaveBeenCalledWith('user');
  });

  it('DEVE retornar false se o usuário não estiver no localStorage', () => {
    getItemMock.mockReturnValue(null);
    const autenticado = useAuthenticator();
    expect(autenticado).toBe(false);
    expect(localStorage.getItem).toHaveBeenCalledWith('user');
  });
});
