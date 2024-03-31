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
:root {
  --md-sys-color-on-surface: #1D1B20;
  --md-sys-state-dragged-state-layer-opacity:0.16;
  --md-sys-color-surface-container-low: #F7F2FA;
  --md-sys-color-surface: #FEF7FF;
  --md-sys-color-shadow: #000000;
  --md-sys-color-secondary: #625B71;
  --md-sys-color-surface-container-highest: #E6E0E9;
  --md-sys-color-outline-variant: #CAC4D0;
  --md-sys-color-outline: #cac4d01f;
  --md-ripple-hover-color: var(--md-sys-color-on-surface);
  --md-ripple-pressed-color: var(--md-sys-color-on-surface);
  --md-elevation-shadow-color:var(--md-sys-color-shadow);
  --md-sys-state-focus-indicator-outer-offset:2px;
  --md-sys-state-focus-indicator-thickness: 3px;
 }
 
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

    <div className='card-wrapper'>

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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate et
          quibusdam, neque animi aliquid tenetur. Officia facilis, veritatis
          adipisci corporis sit, cumque exercitationem earum necessitatibus id
          sequi, officiis mollitia rem.
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

export const isDisabled = Template.bind({});
isDisabled.args = {
  ...primary,
  disabled: true,
};

export const isDraggable = Template.bind({});
isDraggable.args = {
  ...primary,
  draggable: true,
};
