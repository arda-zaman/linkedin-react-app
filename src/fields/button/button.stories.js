import React from 'react';
import Button from './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary'
};

export const Icon = Template.bind({});
Icon.args = {
  type: 'secondary',
  icon: <FontAwesomeIcon icon={faPlus} />
};