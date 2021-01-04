import React from 'react';
import Button from './button';

export default {
    title: 'atoms/Button',
    component: Button
}

const Template = args => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button Primary',
    radius: true,
    disabled: false,
    bold: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
    ...Primary.args,
    secondary: true,
    label: 'Button Secondary'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    ...Primary.args,
    icon: 'FiSmile',
    label: 'With Icon'
};

export const IsLoading = Template.bind({});
IsLoading.args = {
    ...Primary.args,
    label: 'Is Loading',
    isLoading: true,
    disabled: true,
};