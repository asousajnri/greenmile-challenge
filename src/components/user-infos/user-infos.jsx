import React from 'react';

import Profile from './profile';

import { StyledUserInfos } from './user-infos-styles';

import photo from '../../assets/images/photo-profile.jpg';

const UserInfos = () => {
  return (
    <StyledUserInfos>
      <Profile />
    </StyledUserInfos>
  );
};

export default UserInfos;
