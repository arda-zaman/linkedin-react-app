import React from 'react';
import Badge from './index';

export default {
    title: 'Badge',
    component: Badge,
    argTypes: {},
};

const Template = (args) => <Badge {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    count: 5
};