import React from 'react';
import { connect } from 'react-redux';

import StarredRepositoryLoading from './starred-repository-loading';

import {
  StyledStarredRepository,
  StyledHeader,
  StyledContent,
  StyledFooter,
} from './starred-repository-styles';

const StarredRepository = ({
  isFetchinging,
  fullName,
  git_url,
  language,
  stargazers_count,
  description,
}) => {
  return (
    <>
      {isFetchinging ? (
        <StarredRepositoryLoading />
      ) : (
        <StyledStarredRepository>
          <StyledHeader>
            <h3>
              <a href={git_url}>{fullName}</a>
            </h3>
            <button>
              Star <i className="far fa-star"></i>
            </button>
          </StyledHeader>
          <StyledContent>
            <p>{description}</p>
          </StyledContent>
          <StyledFooter>
            <h4>
              <span className="ball"></span>
              {language}
            </h4>
            <h4>
              <i className="far fa-star"></i>
              {stargazers_count}
            </h4>
          </StyledFooter>
        </StyledStarredRepository>
      )}
    </>
  );
};

export default connect(state => ({
  isFetchinging: state.isFetchinging,
}))(StarredRepository);
