import React from 'react';
import { connect } from 'react-redux';

import Section from '../section';
import StarreRepositories from './starred-repositories';
import Profile from './profile';
import DevLocation from './dev-location';

import { StyledUserInfos } from './user-infos-styles';

const UserInfos = ({ findedUser, devData }) => {
  const { starred, location } = devData;

  return (
    <StyledUserInfos>
      <Profile />
      {starred && (
        <Section title="Repositórios com estrela">
          <StarreRepositories />
        </Section>
      )}
      {location && (
        <Section title="LocalizaçÃo do Dev">
          <DevLocation />
        </Section>
      )}
    </StyledUserInfos>
  );
};

export default connect(state => ({
  findedUser: state.findedUser,
  devData: state.devData,
}))(UserInfos);
