import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../header.styles';

describe('Input.styles', () => {
  test('ContainerContent DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.ContainerContent />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerHeader DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.ContainerHeader />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerLogout DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.ContainerLogout />).toJSON();

    expect(container).toMatchSnapshot();
  });
});
