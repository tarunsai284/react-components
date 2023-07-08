import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navigator from './Navigator';

describe('<Navigator />', () => {
  test('it should mount', () => {
    render(<Navigator />);
    
    const navigator = screen.getByTestId('Navigator');

    expect(navigator).toBeInTheDocument();
  });
});