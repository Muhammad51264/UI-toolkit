import React from 'react';
import Badges from '../components/badges';

export default {
  title: 'badges',
  component: Badges,
};

const Template = (args) => (
  <>
    <style>{`
      :root{
        --color-black: #000;
        --md-sys-color-error-light: #B3261E;
        --md-sys-color-on-error-light: #FFFFFF;
        --md-sys-color-error-container-light: #F9DEDC;
        --md-sys-color-on-error-container: #410E0B;
      }

      .svg-icon {
        width: 30px;
        height: 30px;
      }

      .svg-icon path,
      .svg-icon polygon,
      .svg-icon rect {
        fill: var(--color-black);
      }

      .svg-icon circle {
        stroke: var(--color-black);
        stroke-width: 1;
      }

      .navigationItem {
        display: flex;
        flex-direction: column;
        height: 30px;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      .itemContainer {
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        position: relative;
      }

      span {
        margin-top: 5px;
      }
    `}</style>
    <div className="navigationItem">
      <div className="itemContainer">
        <svg className="svg-icon" viewBox="0 0 20 20">
          <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
        </svg>
        <Badges {...args}></Badges>
      </div>
      <span>Label</span>
    </div>
  </>
);

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  label: 556,
  size: 'large',
};
