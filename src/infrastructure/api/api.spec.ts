import {api} from './api';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(api);

describe('api module', () => {
  const url = '/test';
  test('DEVE fazer uma requisição GET para a URL correta', async () => {
    const responseData = {data: 'test'};
    mock.onGet(url).reply(200, responseData);
    const response = await api.get(url);
    expect(response.data).toEqual(responseData);
  });

  test('DEVE fazer uma requisição POST para a URL correta com os dados corretos', async () => {
    const postData = {data: 'test'};
    const responseData = {result: 'success'};
    mock.onPost(url, postData).reply(200, responseData);
    const response = await api.post(url, postData);
    expect(response.data).toEqual(responseData);
  });

  test('DEVE lançar um erro quando ocorrer um erro de rede', async () => {
    mock.onGet(url).networkError();
    await expect(api.get(url)).rejects.toThrow('Network Error');
  });

  test('DEVE lançar um erro quando a API retornar um erro de autenticação', async () => {
    mock.onGet(url).reply(401);
    await expect(api.get(url)).rejects.toThrow(
      'Request failed with status code 401',
    );
  });

  test('DEVE lançar um erro quando a API retornar um erro de autorização', async () => {
    mock.onGet(url).reply(403);
    await expect(api.get(url)).rejects.toThrow(
      'Request failed with status code 403',
    );
  });

  test('DEVE lançar um erro quando a API retornar um erro de não encontrado', async () => {
    mock.onGet(url).reply(404);
    await expect(api.get(url)).rejects.toThrow(
      'Request failed with status code 404',
    );
  });

  test('DEVE lançar um erro quando a API retornar um erro interno', async () => {
    mock.onGet(url).reply(500);
    await expect(api.get(url)).rejects.toThrow(
      'Request failed with status code 500',
    );
  });
});
