import React from 'react';
import List from '../components/list';
import WrapperComponent from './story-wrapper/WrapperComponent.jsx';
import CheckBox from '../components/checkbox';
import Radio from '../components/radio';
import Switch from '../components/switch';

export default {
  title: 'List',
  component: List,
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
      .listsWrapper {
        background-color: var(--md-sys-color-surface);
        border-radius: 15px;
        display:flex;
        flex-direction: column;
        max-height: 80vh;
        overflow-y: auto;
        padding: 8px 0;
        width: 400px;
      }

      .svg-icon path,
      .svg-icon polygon,
      .svg-icon rect {
        fill: #4691f6;
      }

      .svg-icon circle {
        stroke: #4691f6;
        stroke-width: 1;
      }
      `}
    </style>
    <div className="listsWrapper">
      <List {...args}></List>
      <List
        {...args}
        leading={
          <svg className="svg-icon" viewBox="0 0 20 20">
            <path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
          </svg>
        }
        leadingType="icon"
      ></List>
      <List
        {...args}
        leading={
          <img
            src="https://source.unsplash.com/user/c_v_r/1600x900"
            alt="avatarImage"
          ></img>
        }
        leadingType="avatar"
      ></List>
      <List
        {...args}
        leading={
          <img
            src="https://source.unsplash.com/user/c_v_r/1600x900"
            alt="avatarImage"
          ></img>
        }
        leadingType="image"
      ></List>
      <List {...args} leadingType="checkbox" leading={<CheckBox />}></List>
      <List {...args} leadingType="radioButton" leading={<Radio />}></List>
      <List
        {...args}
        leading={
          <img
            src="https://source.unsplash.com/user/c_v_r/1600x900"
            alt="avatarImage"
          ></img>
        }
        leadingType="avatar"
        trailing={<Switch />}
      ></List>
      <List
        {...args}
        leading={
          <img
            src="https://source.unsplash.com/user/c_v_r/1600x900"
            alt="avatarImage"
          ></img>
        }
        leadingType="avatar"
        trailing={<CheckBox />}
      ></List>
      <List
        {...args}
        leading={
          <img
            src="https://source.unsplash.com/user/c_v_r/1600x900"
            alt="avatarImage"
          ></img>
        }
        leadingType="avatar"
        trailing={'+100'}
      ></List>
      <List
        {...args}
        leading={
          <img
            src="https://source.unsplash.com/user/c_v_r/1600x900"
            alt="avatarImage"
          ></img>
        }
        leadingType="avatar"
        isEdit
      ></List>
      <List
        {...args}
        leading={
          <img
            src="https://source.unsplash.com/user/c_v_r/1600x900"
            alt="avatarImage"
          ></img>
        }
        leadingType="avatar"
        isEdit
        isDisabled
        isLastList
      ></List>
    </div>
  </>
);

export const OneLineList = Template.bind({});
OneLineList.args = {
  headline: 'Headline',
  isDraggable: true,
};

export const TwoLineList = Template.bind({});
TwoLineList.args = {
  headline: 'Headline',
  supportingText: 'this is a list for testing',
  isDraggable: true,
};

export const ThreeLineList = Template.bind({});
ThreeLineList.args = {
  headline: 'Headline',
  supportingText:
    'this is a multiline list for testing how it looks in 2 lines, ellipses at the end when it exceeds 2 lines',
  isMultiLine: true,
  isDraggable: true,
};
