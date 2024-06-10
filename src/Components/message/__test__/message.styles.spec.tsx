import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import * as S from '../message.styles';

describe('message.styles', () => {
  test('Container DEVE ser igual ao snapshot', () => {
    const container = renderer.create(<S.Container />).toJSON();

    expect(container).toMatchSnapshot();
  });

  test('ContainerTexto DEVE ser igual ao snapshot', () => {
    const containerTexto = renderer.create(<S.ContainerTexto />).toJSON();

    expect(containerTexto).toMatchSnapshot();
  });

  test('TextTitle DEVE ser igual ao snapshot', () => {
    const textTitle = renderer.create(<S.TextTitle />).toJSON();

    expect(textTitle).toMatchSnapshot();
  });

  test('TextTitle DEVE ser igual ao snapshot', () => {
    const textTitle = renderer
      .create(<S.TextTitle colorTitle="#3D9DB3" />)
      .toJSON();

    expect(textTitle).toMatchSnapshot();
  });

  test('TextMessege DEVE ser igual ao snapshot', () => {
    const textMessege = renderer.create(<S.TextMessege />).toJSON();

    expect(textMessege).toMatchSnapshot();
  });

  test('TextMessege DEVE ser igual ao snapshot', () => {
    const textMessege = renderer
      .create(<S.TextMessege colorMessege="#3D9DB3" />)
      .toJSON();

    expect(textMessege).toMatchSnapshot();
  });
});
