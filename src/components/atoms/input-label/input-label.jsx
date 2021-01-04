import React from 'react';

import {
    StyledInputLabel
} from './input-lavel-styles';

const InputLabel = ({ text = 'Input Label' }) => {
    return <StyledInputLabel>{text}</StyledInputLabel>
};

export default InputLabel;