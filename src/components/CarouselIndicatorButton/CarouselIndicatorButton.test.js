import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CarouselIndicatorButton from './CarouselIndicatorButton';

describe('<CarouselIndicatorButton />', () => {
  test('it should mount', () => {
    render(<CarouselIndicatorButton />);
    
    const carouselIndicatorButton = screen.getByTestId('CarouselIndicatorButton');

    expect(carouselIndicatorButton).toBeInTheDocument();
  });
});