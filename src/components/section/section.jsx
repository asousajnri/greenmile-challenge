import React from 'react';
import FadeIn from 'react-fade-in';
import { connect } from 'react-redux';

import SectionLoading from './section-loading';

import { StyledSection } from './section-styles';

const Section = ({ isFetchinging, title, children }) => {
  return (
    <>
      {isFetchinging ? (
        <SectionLoading>{children}</SectionLoading>
      ) : (
        <StyledSection>
          <FadeIn>
            <h2>{title}</h2>
            {children}
          </FadeIn>
        </StyledSection>
      )}
    </>
  );
};

export default connect(state => ({
  isFetchinging: state.isFetchinging,
}))(Section);
