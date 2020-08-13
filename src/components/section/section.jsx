import React from 'react';
import FadeIn from 'react';

import { StyledSection } from './section-styles';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <h2>{title}</h2>
      {children}
    </StyledSection>
  );
};

export default Section;
