import React from 'react';
import {RenderResult, render} from '@testing-library/react';
import {PublicRoutes} from './publicRoutes';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Outlet: () => <div>Outlet</div>,
}));

describe('PublicRoutes', () => {
  let componente: RenderResult;

  beforeEach(() => {
    componente = render(<PublicRoutes />);
  });
  test('DEVE renderizar o componente Outlet', () => {
    expect(componente.getByText('Outlet')).toBeDefined();
  });
});
