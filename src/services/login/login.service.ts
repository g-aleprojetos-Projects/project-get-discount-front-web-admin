import {api} from 'infrastructure/api';
import {ILoginResponse} from 'infrastructure/api/schemas/response';
import {ILoginRequest} from 'infrastructure/api/schemas/request';
import rotasAPI from 'types/rotasAPI';

interface IApiResponse {
  value: ILoginResponse;
}

export async function login(login: ILoginRequest) {
  const response = await api.post<IApiResponse>(`${rotasAPI.login}`, {
    ...login,
  });
  return response.data.value;
}
