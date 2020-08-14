import React from 'react';
import FadeIn from 'react-fade-in';
import { connect } from 'react-redux';

import ProfileLoading from './profile-loading';

import {
  StyledProfile,
  StyledPhoto,
  StyledContent,
} from './profile-styles';

const Profile = ({ isFetchinging, devData }) => {
  console.log(devData);

  const { avatar_url, bio, name, html_url } = devData;

  return (
    <>
      {isFetchinging ? (
        <ProfileLoading />
      ) : (
        <FadeIn>
          <StyledProfile>
            <StyledPhoto>
              <img
                src={avatar_url}
                alt="Foto do Dev no Github"
              />
            </StyledPhoto>
            <StyledContent>
              <h2>{name}</h2>
              <p>{bio}</p>
              <span>
                <i className="fab fa-github"></i>
                <a href={html_url}>{html_url}</a>
              </span>
            </StyledContent>
          </StyledProfile>
        </FadeIn>
      )}
    </>
  );
};

export default connect(state => ({
  isFetchinging: state.isFetchinging,
  devData: state.devData,
}))(Profile);
