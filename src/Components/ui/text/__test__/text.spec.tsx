import React from 'react';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import {TextH1, TextH2, TextH3, TextH4, TextH5, TextH6, TextP} from '..';

describe('Input', () => {
  describe('Renderização', () => {
    test('DEVE renderizar o texto "Texto de teste" com o "TextH1"', () => {
      const result = render(<TextH1>Texto de teste</TextH1>).getByText(
        'Texto de teste',
      );

      expect(result).toBeDefined();
    });

    test('DEVE renderizar o texto "Texto de teste" com o "TextH2"', () => {
      const result = render(<TextH2>Texto de teste</TextH2>).getByText(
        'Texto de teste',
      );

      expect(result).toBeDefined();
    });

    test('DEVE renderizar o texto "Texto de teste" com o "TextH3"', () => {
      const result = render(<TextH3>Texto de teste</TextH3>).getByText(
        'Texto de teste',
      );

      expect(result).toBeDefined();
    });

    test('DEVE renderizar o texto "Texto de teste" com o "TextH4"', () => {
      const result = render(<TextH4>Texto de teste</TextH4>).getByText(
        'Texto de teste',
      );

      expect(result).toBeDefined();
    });

    test('DEVE renderizar o texto "Texto de teste" com o "TextH5"', () => {
      const result = render(<TextH5>Texto de teste</TextH5>).getByText(
        'Texto de teste',
      );

      expect(result).toBeDefined();
    });

    test('DEVE renderizar o texto "Texto de teste" com o "TextH6"', () => {
      const result = render(<TextH6>Texto de teste</TextH6>).getByText(
        'Texto de teste',
      );

      expect(result).toBeDefined();
    });

    test('DEVE renderizar o texto "Texto de teste" com o "TextP"', () => {
      const result = render(<TextP>Texto de teste</TextP>).getByText(
        'Texto de teste',
      );

      expect(result).toBeDefined();
    });
  });
});
