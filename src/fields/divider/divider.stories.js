import React from 'react';
import Divider from './index';

export default {
    title: 'Divider',
    component: Divider,
    argTypes: {},
};

const Template = (args) => <Divider {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    thickness: 1,
    color: '#424242',
};

export const Orianted = Template.bind({});
Orianted.args = {
    thickness: 1,
    orientation: 'vertical',
    color: '#424242',
};