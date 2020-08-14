import React from 'react';
import { connect } from 'react-redux';

import StarredRepository from './starred-repository';

import { StyledStarredRepositories } from './starred-repositories-styles';

const StarredRepositories = ({ starredRepos }) => {
  return (
    <StyledStarredRepositories>
      {starredRepos.map(starredRepo => (
        <StarredRepository
          key={starredRepo.id}
          fullName={starredRepo.full_name}
          git_url={starredRepo.git_url}
          language={starredRepo.language}
          stargazers_count={starredRepo.stargazers_count}
          description={starredRepo.description}
        />
      ))}
    </StyledStarredRepositories>
  );
};

export default connect(state => ({
  starredRepos: state.devData.starred,
}))(StarredRepositories);
