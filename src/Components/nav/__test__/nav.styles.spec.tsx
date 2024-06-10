import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../nav.styles';

describe('Nav.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Container />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerLogo DEVE ser igual ao snapshot', () => {
    const containerLogo = renderer.create(<S.ContainerLogo />).toJSON();

    expect(containerLogo).toMatchSnapshot();
  });

  test('Logo DEVE ser igual ao snapshot', () => {
    const logo = renderer.create(<S.Logo />).toJSON();

    expect(logo).toMatchSnapshot();
  });
});
