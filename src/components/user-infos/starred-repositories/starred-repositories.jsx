import React from 'react';
import { connect } from 'react-redux';

import StarredRepository from './starred-repository';

import { StyledStarredRepositories } from './starred-repositories-styles';

const StarredRepositories = ({
  starredRepos,
  findedUser,
}) => {
  return (
    <StyledStarredRepositories>
      {starredRepos.map(starredRepo => (
        <StarredRepository
          key={starredRepo.id}
          findedUser={findedUser}
          repo_id={starredRepo.id}
          owner_login={starredRepo.owner_login}
          repo_name={starredRepo.name}
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
  findedUser: state.devData.login,
  starredRepos: state.devData.starred,
}))(StarredRepositories);
