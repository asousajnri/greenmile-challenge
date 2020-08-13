import React from 'react';
import FadeIn from 'react-fade-in';

import { StyledSection } from './section-styles';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <FadeIn>
        <h2>{title}</h2>
        {children}
      </FadeIn>
    </StyledSection>
  );
};

export default Section;
