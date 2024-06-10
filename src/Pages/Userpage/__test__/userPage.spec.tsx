import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {UserPage} from '../userPage';

describe('UserPage', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<UserPage />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "UserPage"`, () => {
      const home = componente.getByTestId('test_user_page');
      expect(home).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = componente.findByTestId('test_image');
      expect(imagem).toBeDefined();
    });
  });
});
