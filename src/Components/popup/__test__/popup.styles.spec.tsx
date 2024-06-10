import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../popup.styles';

describe('popup.styles', () => {
  test('Cabecalho DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Cabecalho />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Container />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('PopupBotao  DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.PopupBotao />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('PopupBox DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.PopupBox />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Principal DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Principal />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Texto DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Texto />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('iconeFechar DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.iconeFechar />).toJSON();

    expect(container).toMatchSnapshot();
  });
});
