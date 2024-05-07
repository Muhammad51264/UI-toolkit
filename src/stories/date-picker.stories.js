import React from 'react';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';
import DatePicker from '../components/date-picker/date-picker.jsx';

export default {
  title: 'Date picker',
  component: DatePicker,
  decorators: [
    (Story) => (
      <WrapperComponent>
        <Story />
      </WrapperComponent>
    ),
  ],
};

const Template = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  onDateChange: (date) => console.log(date),
  onAccept: (date) => console.log(date),
  maxWidth: '280px',
  minWidth: '280px',
};
