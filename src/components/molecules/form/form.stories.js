import React from 'react';
import FormComponent from './form';

export default {
  title: 'molecules/Form',
  component: FormComponent,
};

const Templete = args => <FormComponent {...args} />

export const Form = Templete.bind({});
Form.args = {
  display: 'flex',
};