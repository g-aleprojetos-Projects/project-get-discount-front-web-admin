import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import {App} from './app';

describe('App', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<App />);
  });

  describe('Renderização', () => {
    test(`DEVE renderizar a "WebRotas"`, () => {
      const app = componente.getByTestId('test_rotas');
      expect(app).toBeDefined();
    });
  });
});
