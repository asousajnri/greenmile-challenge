import React from 'react';

import LabelComponent from './input-label';

export default {
    title: 'atoms/LabelComponent',
    component: LabelComponent,
}

const Template = args => <LabelComponent {...args} />;

export const Label = Template.bind({});
Label.args = {
    text: 'Input Label'
};