import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import Divider from './divider.jsx';

const renderDivider = (props) => render(<Divider {...props}></Divider>);

describe('Divider component', () => {
  it('renders with default props', async () => {
    renderDivider();
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('divider');
  });

  it('renders with inset class if the inset prop is passed', async () => {
    renderDivider({ inset: true });
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('inset');
  });

  it('renders with insetStart class if the insetStart prop is passed', async () => {
    renderDivider({ insetStart: true });
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('insetStart');
  });

  it('renders with insetEnd class if the insetEnd prop is passed', async () => {
    renderDivider({ insetEnd: true });
    const divider = screen.getByRole('separator');
    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass('insetEnd');
  });
});
