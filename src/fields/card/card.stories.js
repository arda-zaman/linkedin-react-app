import React from 'react';
import Card from './index';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    title: 'Hello World',
    children: <div>Arda Zaman</div>
};