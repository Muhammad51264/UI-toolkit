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
  <>
    <style>
      {`
 
 *{
  margin: 0;
  padding:0;
 }

 .container {
  align-items: flex-start;
  display:flex;
  flex-direction:column;
  gap:0.1rem;
  margin-top: 1rem;
 }

 .card-wrapper{
  max-width: 35rem
 }
 `}
    </style>

    <div className="card-wrapper">
      <Card {...args}>
        <div className="container">
          <h1>Headline</h1>
          <h4>Subhead</h4>
          <p
            style={{
              textAlign: 'left',
              margin: '0.625rem 0',
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            et quibusdam, neque animi aliquid tenetur. Officia facilis,
            veritatis adipisci corporis sit, cumque exercitationem earum
            necessitatibus id sequi, officiis mollitia rem.
          </p>
        </div>
      </Card>
    </div>
  </>
);

const primary = {
  cardType: 'elevated',
  disabled: false,
  draggable: false,
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

export const Disabled = Template.bind({});
Disabled.args = {
  ...primary,
  disabled: true,
};

export const Draggable = Template.bind({});
Draggable.args = {
  ...primary,
  draggable: true,
};
