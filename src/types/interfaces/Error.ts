export interface IError {
  codigo?: string;
  mensagem?: string;
}

export interface IErrorResponse {
  erros: IError[];
}
