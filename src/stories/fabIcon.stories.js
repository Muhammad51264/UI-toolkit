import React from 'react';
import { SearchIcon } from '@storybook/icons';
import FabIcon from '../components/fabicon';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';

export default {
  title: 'FabIcon',
  component: FabIcon,
  decorators: [
    (Story) => (
      <WrapperComponent>
        <Story />
      </WrapperComponent>
    ),
  ],
};

const Template = (args) => <FabIcon {...args}></FabIcon>;

export const Default = Template.bind({});
Default.args = {
  children: <SearchIcon />,
};

export const ExtendedWithLabel = Template.bind({});
ExtendedWithLabel.args = {
  label: 'Fab Icon',
  children: <SearchIcon />,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: <SearchIcon />,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: <SearchIcon />,
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: <SearchIcon />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: <SearchIcon />,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: <SearchIcon />,
};
