import React from 'react';
import FadeIn from 'react-fade-in';
import { connect } from 'react-redux';

import SectionLoading from './section-loading';

import { StyledSection } from './section-styles';

const Section = ({ isFetch, title, children }) => {
  return (
    <>
      {isFetch ? (
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
  isFetch: state.isFetch,
}))(Section);
