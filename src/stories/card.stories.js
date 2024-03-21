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

const Template = (args) => (
  <Card {...args}>
    <img
      src="https://via.placeholder.com/150/0000FF/808080 ?Text=PAKAINFO.com"
      style={{ width: '100%', height: '150px' }}
    ></img>
    <h3 style={{ padding: '0 0 0 0.5rem', margin: '0' }}>Card Headline</h3>
    <h5 style={{ padding: '0 0 0 0.7rem', margin: '0' }}>subHead</h5>
    <p style={{ padding: '0 1rem' }}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga dolorem in
      non omnis, sequi laboriosam dolor voluptates officia, ratione ea itaque
      cumque facere blanditiis excepturi ab quod, corporis saepe autem?
    </p>
  </Card>
);

const primary = {
  alignItems: 'flex-start',
  cardType: 'elevated',
  flexDirection: 'column',
  gap: '0rem',
  justifyContent: 'center',
  padding: '0',
  width: '250px',
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
