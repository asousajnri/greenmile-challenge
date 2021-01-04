import React from 'react';

import {
    StyledInput
} from './input-styles';

const Input = ({ 
    type = 'text', 
    placeholder, 
    radius = true 
}) => {
    return (
        <StyledInput 
            type={type} 
            placeholder={placeholder}  
            radius={radius} 
        />
    );
};

export default Input;