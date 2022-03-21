import React from 'react';
import { render, screen } from '@testing-library/react';
import Destination from '../components/Destination';
import data from '../data.json';

test("should show the Tehran destination", () => {
  const destination = data[1];
  render(<Destination destination={destination} />);
  const tehran = screen.getByText('Tehran');
  expect(tehran).toBeInTheDocument();
});
