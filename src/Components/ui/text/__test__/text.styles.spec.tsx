import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import {Texto} from '../text.styles';
import colors from 'resources/colors';

describe('Text.styles', () => {
  test('Texto "H1" DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<Texto.H1 />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "H2" DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<Texto.H2 />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "H3" DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<Texto.H3 />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "H4" DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<Texto.H4 />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "H5" DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<Texto.H5 />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "H6" DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<Texto.H6 />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "P" DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<Texto.P />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test(`Texto "P" DEVE ter a cor ${colors.red} QUANDO for passada pelo props`, () => {
    const container = renderer.create(<Texto.P cor={colors.red} />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "P" DEVE estar com o texto em "uppercase" QUANDO for passado pelo props', () => {
    const container = renderer.create(<Texto.P toUpper={true} />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "P" DEVE ter o cursor como "pointer" QUANDO for passado "pointer" no cursor da props', () => {
    const container = renderer.create(<Texto.P cursor="pointer" />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "P" DEVE ter o cursor como "default" QUANDO for passado "default" no cursor da props', () => {
    const container = renderer.create(<Texto.P cursor="default" />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "P" DEVE ter o marginTop como "32" QUANDO for passado "32" no marginTop da props', () => {
    const container = renderer.create(<Texto.P marginTop={32} />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "P" DEVE ter o peso como "bold" QUANDO for passado "bold" no peso da props', () => {
    const container = renderer.create(<Texto.P peso="bold" />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "P" DEVE ter o peso como "medium" QUANDO for passado "medium" no peso da props', () => {
    const container = renderer.create(<Texto.P peso="medium" />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "P" DEVE ter o tamanho como "32" QUANDO for passado "32" no tamanho da props', () => {
    const container = renderer.create(<Texto.P tamanho={32} />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "P" DEVE ter o alturaDeLinha como "32" QUANDO for passado "32" no alturaDeLinha da props', () => {
    const container = renderer.create(<Texto.P alturaDeLinha={32} />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto "P" DEVE ter o fontSize como "32" QUANDO for passado "32" no fontSize da props', () => {
    const container = renderer.create(<Texto.P fontSize="32px" />).toJSON();

    expect(container).toMatchSnapshot();
  });
});
