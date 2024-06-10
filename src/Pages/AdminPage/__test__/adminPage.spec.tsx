import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {AdminPage} from '../adminPage';

describe('AdminPage', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<AdminPage />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "AdminPage"`, () => {
      const home = componente.getByTestId('test_admin_page');
      expect(home).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = componente.findByTestId('test_image');
      expect(imagem).toBeDefined();
    });
  });
});
