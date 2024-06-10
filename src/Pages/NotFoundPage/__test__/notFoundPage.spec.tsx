import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {NotFoundPage} from '../notFoundPage';

describe('NotFoundPage', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<NotFoundPage />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a pagina "NotFoundPage"`, () => {
      const home = componente.getByTestId('test-notFound-page');
      expect(home).toBeDefined();
    });
    test(`DEVE renderizar a "Imagem" na pagina`, async () => {
      const imagem = componente.findByTestId('test_image');
      expect(imagem).toBeDefined();
    });
  });
});
