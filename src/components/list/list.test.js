import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { screen as shadowScreen } from 'shadow-dom-testing-library';
import List from './list.jsx';
import CheckBox from '../checkbox/checkbox.jsx';
import Radio from '../radio/radio.jsx';
import Switch from '../switch/switch.jsx';

const renderList = (props) => render(<List {...props} />);

describe('List Component', () => {
  it('renders the component properly', () => {
    renderList();

    const listComponent = screen.getByTestId('listComponent');
    expect(listComponent).toBeInTheDocument();
  });

  it('renders the component properly with the headline', () => {
    renderList({ headline: 'headline' });

    const headline = screen.getByText('headline');
    expect(headline).toBeInTheDocument();
  });

  it('renders the component properly with the supportingText', () => {
    renderList({ headline: 'headline', supportingText: 'supporting text' });

    const supportingList = screen.getByText('supporting text');
    expect(supportingList).toBeInTheDocument();
  });

  it('renders the component with leading svg', () => {
    const svgElement = <svg aria-label="icon"></svg>;
    renderList({
      headline: 'headline',
      supportingText: 'supporting text',
      leading: svgElement,
      leadingType: 'icon',
    });

    const icon = screen.getByLabelText('icon');
    const iconWrapper = screen.getByTestId('leadingWrapper');

    expect(iconWrapper).toBeInTheDocument();
    expect(iconWrapper).toHaveClass('icon');
    expect(icon).toBeInTheDocument();
  });
  it('renders the component with leading image', () => {
    const imageElement = (
      <img
        src="https://source.unsplash.com/user/c_v_r/1600x900"
        alt="test"
        aria-label="test image"
      />
    );
    renderList({
      headline: 'headline',
      supportingText: 'supporting text',
      leading: imageElement,
      leadingType: 'image',
    });

    const image = screen.getByRole('img', { name: 'test image' });
    const imageContainer = screen.getByTestId('leadingWrapper');

    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveClass('image');
    expect(image).toBeInTheDocument();
  });

  it('renders the component with leading checkbox', () => {
    const checkbox = <CheckBox label="checkbox" />;
    renderList({
      headline: 'headline',
      supportingText: 'supporting text',
      leading: checkbox,
      leadingType: 'checkbox',
    });

    const leadingCheckbox = screen.getByLabelText('checkbox');
    const leadingContainer = screen.getByTestId('leadingWrapper');

    expect(leadingCheckbox).toBeInTheDocument();
    expect(leadingContainer).toBeInTheDocument();
    expect(leadingContainer).toHaveClass('checkbox');
  });
  it('renders the component with leading radioButton', () => {
    // eslint-disable-next-line no-undef
    ElementInternals.prototype.setValidity = jest.fn();
    const radioButton = <Radio />;
    renderList({
      headline: 'headline',
      supportingText: 'supporting text',
      leading: radioButton,
      leadingType: 'radioButton',
    });

    const leadingContainer = screen.getByTestId('leadingWrapper');

    expect(leadingContainer).toBeInTheDocument();
    expect(leadingContainer).toHaveClass('radioButton');
    expect(leadingContainer.childNodes.length).toBe(1);
  });

  it('renders the component with switch component', async () => {
    const switchComponent = <Switch ariaLabel="Test Switch" />;
    renderList({
      headline: 'headline',
      supportingText: 'supporting text',
      trailing: switchComponent,
    });

    const trailingWrapper = screen.getByTestId('trailingWrapper');
    const switchChild = await shadowScreen.findByShadowRole('switch');
    expect(trailingWrapper.childNodes.length).toBe(1);
    expect(switchChild).toBeInTheDocument();
  });

  it('renders the component with switch component as a trailing component', () => {
    const checkbox = <CheckBox label="checkbox" />;
    renderList({
      headline: 'headline',
      supportingText: 'supporting text',
      trailing: checkbox,
    });

    const trailingWrapper = screen.getByTestId('trailingWrapper');
    const leadingCheckbox = screen.getByLabelText('checkbox');

    expect(trailingWrapper).toBeInTheDocument();
    expect(leadingCheckbox).toBeInTheDocument();
  });

  it('renders the component with edit mode with edit icon as svg', () => {
    renderList({
      headline: 'headline',
      supportingText: 'supporting text',
      isEdit: true,
    });

    const editIcon = screen.getByLabelText('edit-icon');
    const listComponent = screen.getByTestId('listComponent');

    expect(listComponent).toBeInTheDocument();
    expect(editIcon).toBeInTheDocument();
    expect(listComponent).toHaveClass('editList');
  });

  it('calls onDragStart when list is dragged', () => {
    const onDragStartMock = jest.fn();
    renderList({
      headline: 'headline',
      onDragStart: onDragStartMock,
      isDraggable: true,
    });

    const listComponent = screen.getByTestId('listComponent');
    fireEvent.dragStart(listComponent);

    expect(onDragStartMock).toHaveBeenCalledTimes(1);
  });

  it('calls onDragEnd when list dragging ends', () => {
    const onDragEndMock = jest.fn();
    renderList({
      headline: 'headline',
      onDragEnd: onDragEndMock,
      isDraggable: true,
    });

    const listComponent = screen.getByTestId('listComponent');
    fireEvent.dragEnd(listComponent);

    expect(onDragEndMock).toHaveBeenCalledTimes(1);
  });

  it("calls the passed onClick function when it's passed", () => {
    const onClickMock = jest.fn();
    renderList({
      headline: 'headline',
      onClick: onClickMock,
    });

    const listComponent = screen.getByTestId('listComponent');
    fireEvent.click(listComponent);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('renders the component with disabled styling', () => {
    renderList({
      headline: 'headline',
      isDisabled: true,
    });

    const listComponent = screen.getByTestId('listComponent');

    expect(listComponent).toHaveClass('disabled');
  });

  it('renders the component with multiline supportingText', () => {
    renderList({
      headline: 'headline',
      isMultiLine: true,
    });

    const listComponent = screen.getByTestId('listComponent');

    expect(listComponent).toHaveClass('multiLine');
  });

  it('renders the component with noBorderBottom class when the list is the last one', () => {
    renderList({
      headline: 'headline',
      isLastList: true,
    });

    const listComponent = screen.getByTestId('listComponent');

    expect(listComponent).toHaveClass('noBorderBottom');
  });

  it('renders the component with default cursor on it', () => {
    renderList({
      headline: 'headline',
      isPointer: false,
    });

    const listComponent = screen.getByTestId('listComponent');

    expect(listComponent).not.toHaveClass('pointer');
  });
});
