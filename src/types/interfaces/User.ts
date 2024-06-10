import {Roles} from 'types/enuns/roles';

export interface IUser {
  id: string;
  nome: string;
  role?: Roles;
  email?: string;
  senha?: string;
  confirmaSenha?: string;
  criadoPor?: string;
  criadoEm?: string;
}
