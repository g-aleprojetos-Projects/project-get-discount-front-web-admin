import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../menu.styles';

describe('Input.styles', () => {
  test('ContainerContent DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.ContainerContent />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerNav DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.ContainerNav />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('Item DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Item />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ItemNav DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.ItemNav />).toJSON();

    expect(container).toMatchSnapshot();
  });
});
