import React from 'react';

import Section from '../section';
import StarreRepositories from './starred-repositories';
import Profile from './profile';

import { StyledUserInfos } from './user-infos-styles';

const UserInfos = () => {
  return (
    <StyledUserInfos>
      <Profile />

      <Section title="Repositórios com estrela">
        <StarreRepositories />
      </Section>

      <Section title="Localização do DEV"></Section>
    </StyledUserInfos>
  );
};

export default UserInfos;
