import React from 'react';

import {Texto, Props} from './text.styles';
import texts from 'resources/texts';

export function TextH1(props: Props) {
  return (
    <Texto.H1
      tamanho={texts.tamanho.medium}
      alturaDeLinha={texts.altura.medium}
      {...props}
    />
  );
}

export function TextH2(props: Props) {
  return (
    <Texto.H2
      tamanho={texts.tamanho.small}
      alturaDeLinha={texts.altura.small}
      {...props}
    />
  );
}

export function TextH3(props: Props) {
  return (
    <Texto.H3
      tamanho={texts.tamanho.xsmall}
      alturaDeLinha={texts.altura.xsmall}
      {...props}
    />
  );
}

export function TextH4(props: Props) {
  return (
    <Texto.H4
      tamanho={texts.tamanho.xxsmall}
      alturaDeLinha={texts.altura.xxsmall}
      {...props}
    />
  );
}

export function TextH5(props: Props) {
  return (
    <Texto.H5
      tamanho={texts.tamanho.xxxsmall}
      alturaDeLinha={texts.altura.xxxsmall}
      {...props}
    />
  );
}

export function TextH6(props: Props) {
  return (
    <Texto.H6
      tamanho={texts.tamanho.xxxxsmall}
      alturaDeLinha={texts.altura.xxxxsmall}
      {...props}
    />
  );
}

export function TextP(props: Props) {
  return (
    <Texto.P
      tamanho={texts.tamanho.xsmall}
      alturaDeLinha={texts.altura.xsmall}
      {...props}
    />
  );
}
