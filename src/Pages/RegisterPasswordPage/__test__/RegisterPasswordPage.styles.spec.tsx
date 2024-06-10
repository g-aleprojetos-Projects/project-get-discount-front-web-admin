import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../RegisterPasswordPage.styles';

describe('RegisterPasswordPage.styles', () => {
  test('BotaoEnviar DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.BotaoEnviar />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerDireita DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.ContainerDireita />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerEsquerda DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.ContainerEsquerda />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerTitulo DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.ContainerTitulo />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Form DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Form />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Main DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Main />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('TextoBotao DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.TextoBotao />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('TextoTitulo DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.TextoTitulo />).toJSON();

    expect(container).toMatchSnapshot();
  });
});
