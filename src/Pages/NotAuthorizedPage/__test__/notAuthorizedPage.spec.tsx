import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {NotAuthorizedPage} from '../notAuthorizedPage';

describe('NotAuthorizedPage', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<NotAuthorizedPage />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "NotAuthorizedPage"`, () => {
      const home = componente.getByTestId('test_not_authorized_page');
      expect(home).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = componente.findByTestId('test_image');
      expect(imagem).toBeDefined();
    });
  });
});
