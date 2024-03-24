import React from 'react';
import Card from '../components/card';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';

export default {
  title: 'Card',
  component: Card,
  decorators: [
    (Story) => (
      <WrapperComponent>
        <Story />
      </WrapperComponent>
    ),
  ],
};

const Template = (args) => <Card {...args} />;

const primary = {
  cardType: 'elevated',
  image: 'https://via.placeholder.com/150/442524/fff?Text=google.com',
  isDisabled: false,
  headline: 'HeadLine',
  subhead: 'Subhead',
  supportingText:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit excepturi quae, eum minima sint hic ducimus eius possimus harum nesciunt accusantium qui illo dolor suscipit dolore dicta voluptatem quam ullam.',
};

export const Default = Template.bind({});
Default.args = {
  ...primary,
};

export const Filled = Template.bind({});
Filled.args = {
  ...primary,
  cardType: 'filled',
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...primary,
  cardType: 'outlined',
};
