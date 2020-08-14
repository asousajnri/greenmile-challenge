import React from 'react';
import { connect } from 'react-redux';

import Section from '../section';
import StarreRepositories from './starred-repositories';
import Profile from './profile';

import {
  StyledUserInfos,
  Alert,
} from './user-infos-styles';

const UserInfos = ({ findedUser, firstSearch }) => {
  return (
    <StyledUserInfos>
      <Profile />
      <Section title="Repositórios com estrela">
        <StarreRepositories />
      </Section>
    </StyledUserInfos>
  );
};

export default connect(state => ({
  findedUser: state.findedUser,
  firstSearch: state.firstSearch,
}))(UserInfos);
