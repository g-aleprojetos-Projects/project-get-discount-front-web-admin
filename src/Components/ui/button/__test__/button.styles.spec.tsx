import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../button.styles';

describe('Button.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Container />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerButton DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.ContainerButton />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerButton DEVE ser igual ao snapshot QUANDO o tipo for "fechar"', () => {
    const container = renderer
      .create(<S.ContainerButton tipo={'fechar'} />)
      .toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerButton DEVE ser igual ao snapshot QUANDO o tipo for "cancelar"', () => {
    const container = renderer
      .create(<S.ContainerButton tipo={'cancelar'} />)
      .toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerButton DEVE ser igual ao snapshot QUANDO o tipo for "confirmar"', () => {
    const container = renderer
      .create(<S.ContainerButton tipo={'confirmar'} />)
      .toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerButton DEVE ser igual ao snapshot QUANDO o tipo for "ok"', () => {
    const container = renderer
      .create(<S.ContainerButton tipo={'ok'} />)
      .toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerButton DEVE ser igual ao snapshot QUANDO o tipo for "submit"', () => {
    const container = renderer
      .create(<S.ContainerButton tipo={'submit'} />)
      .toJSON();

    expect(container).toMatchSnapshot();
  });
});
