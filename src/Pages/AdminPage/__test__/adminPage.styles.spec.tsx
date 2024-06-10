import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import manutencao from 'assets/image/manutencao.svg';
import * as S from '../adminPage.styles';

describe('AdminPage.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Container />).toJSON();
    expect(container).toMatchSnapshot();
  });

  test('Image DEVE ser igual ao snapshot', () => {
    const imagem = renderer.create(<S.Imagem src={manutencao} />).toJSON();
    expect(imagem).toMatchSnapshot();
  });
});
