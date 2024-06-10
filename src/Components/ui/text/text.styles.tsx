import React from 'react';
import styled from 'styled-components';
import cores from 'resources/colors';
import fontes from 'resources/fonts';
import texts from 'resources/texts';

export type Props = {
  id?: string;
  cor?: string;
  tamanho?: number;
  alturaDeLinha?: number;
  fontSize?: string;
  marginTop?: number;
  children?: string | React.ReactNode;
  peso?: 'bold' | 'medium';
  toUpper?: boolean;
  cursor?: 'default' | 'pointer' | 'text';
};

const TextoBase = styled.p<Props>`
  font-size: ${props => props.tamanho ?? texts.tamanho.xxxsmall}px;
  font-family: ${props =>
    props.peso === 'bold' ? fontes.avertaBold : fontes.avertaRegular};
  color: ${props => props.cor ?? cores.black};
  margin-top: ${props => props.marginTop ?? 0}px;
  text-transform: ${props => (props.toUpper ? 'uppercase' : 'none')};
  line-height: ${props => props.alturaDeLinha}px;
  cursor: ${props => props.cursor ?? 'text'};
`;

export const Texto = {
  P: TextoBase,
  H1: TextoBase.withComponent('h1'),
  H2: TextoBase.withComponent('h2'),
  H3: TextoBase.withComponent('h3'),
  H4: TextoBase.withComponent('h4'),
  H5: TextoBase.withComponent('h5'),
  H6: TextoBase.withComponent('h6'),
};
