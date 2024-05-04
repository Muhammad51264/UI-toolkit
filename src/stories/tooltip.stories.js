import React from 'react';
import Tooltip from '../components/tooltip';
import Button from '../components/button';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

const Template = (args) => (
  <>
    <style>{`
      :root{
        --md-ref-palette-neutral94: #F3EDF7;
        --md-sys-typescale-title-small-font-family-name: Roboto;
        --md-sys-typescale-title-small-font-family-style: Medium;
        --md-sys-typescale-title-small-font-weight: 500px;
        --md-sys-typescale-title-small-font-size: 14px;
        --md-sys-typescale-title-small-line-height: 20px;
        --md-sys-typescale-title-small-letter-spacing: 0.10px;
        --md-sys-typescale-title-medium-font-family-name: Roboto;
        --md-sys-typescale-title-medium-font-family-style: Medium;
        --md-sys-typescale-title-medium-font-weight: 500px;
        --md-sys-typescale-title-medium-font-size: 16px;
        --md-sys-typescale-title-medium-line-height: 24px;
        --md-sys-typescale-title-medium-letter-spacing: 0.15px;
        --md-sys-color-inverse-surface-light: #313033;
        --md-sys-color-inverse-on-surface-light: #F4EFF4;
        --md-sys-color-on-primary: #FFFFFF;
        --md-sys-color-primary: #6750A4;
        --md-sys-color-outline: #79747E;
        --md-sys-color-secondary-container: #E8DEF8;
        --md-sys-color-on-secondary-container: #1D192B;
        --md-sys-color-secondary: #625B71;
        --md-sys-state-focus-indicator-thickness: 3px;
        --md-sys-state-focus-indicator-outer-offset: 2px;
        --md-sys-color-on-surface: 29, 27, 32;
        --md-sys-typescale-label-large-tracking: 0.5pt;
        --md-sys-shape-corner-full: 20px;
        --md-sys-color-surface-container-low: #F7F2FA;
        --md-sys-typescale-label-large-font: 20pt;
        --md-sys-typescale-label-large-weight: 500;
        --md-sys-typescale-label-large-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }

      *{
        font-family: var(--md-sys-typescale-title-small-font-family-name)
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
        font-family: var(--md-sys-typescale-title-small-font-family-name);
      }

      .itemContainer {
        align-items: center;
        cursor: pointer;
        display: flex;
        flex-direction: column;
      }

      .navigateWrapper {
        cursor: pointer;
        position: relative;
      }

      span {
        margin-top: 5px;
      }
    `}</style>
    <div className="navigationItem">
      <div className="navigateWrapper">
        <div className="itemContainer">
          <svg className="svg-icon" viewBox="0 0 20 20">
            <path d="M17.388,4.751H2.613c-0.213,0-0.389,0.175-0.389,0.389v9.72c0,0.216,0.175,0.389,0.389,0.389h14.775c0.214,0,0.389-0.173,0.389-0.389v-9.72C17.776,4.926,17.602,4.751,17.388,4.751 M16.448,5.53L10,11.984L3.552,5.53H16.448zM3.002,6.081l3.921,3.925l-3.921,3.925V6.081z M3.56,14.471l3.914-3.916l2.253,2.253c0.153,0.153,0.395,0.153,0.548,0l2.253-2.253l3.913,3.916H3.56z M16.999,13.931l-3.921-3.925l3.921-3.925V13.931z"></path>
          </svg>
          <Tooltip {...args} />
        </div>
        <span>Hover Me</span>
      </div>
    </div>
  </>
);

export const Rich = Template.bind({});
Rich.args = {
  firstActionButton: <Button name="button1" variant="textType" text="button" />,
  secondActionButton: (
    <Button name="button2" variant="textType" text="button" />
  ),
  position: 'bottomRight',
  subhead: 'Plain tooltips',
  text: "Plain tooltips briefly describe a UI element. They're best used for labelling UI elements with no text, like icon-only buttons and fields.",
  variant: 'rich',
};

export const Plain = Template.bind({});
Plain.args = {
  variant: 'plain',
  text: 'Emails',
  position: 'top',
};
