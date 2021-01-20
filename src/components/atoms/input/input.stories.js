import React from 'react';

import InputComponent from './input';

export default {
  title: 'atoms/Input',
  component: InputComponent,
};

const Template = args => <InputComponent {...args} />;

export const Input = Template.bind({});
Input.args = {
  radius: true,
};

export const InputWithLabel = Template.bind({});
InputWithLabel.args = {
  ...Input.args,
  label: 'Input',
};
