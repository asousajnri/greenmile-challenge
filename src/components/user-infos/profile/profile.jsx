import React from 'react';
import FadeIn from 'react-fade-in';

import {
  StyledProfile,
  StyledPhoto,
  StyledContent,
} from './profile-styles';

import photo from '../../../assets/images/photo-profile.jpg';

const Profile = () => {
  return (
    <FadeIn>
      <StyledProfile>
        <StyledPhoto>
          <img src={photo} alt="Foto do Dev no Github" />
        </StyledPhoto>
        <StyledContent>
          <h2>Apelido do Dev</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Voluptatem provident quae odit
            fugiat eos a modi.
          </p>
          <span>
            <i className="fab fa-github"></i>
            <a href="https://github.com/asousajnri">
              URL do Github
            </a>
          </span>
        </StyledContent>
      </StyledProfile>
    </FadeIn>
  );
};

export default Profile;
