import React from 'react';

import {
  StyledProfile,
  StyledPhoto,
  StyledContent,
} from './profile-styles';

import photo from '../../../assets/images/photo-profile.jpg';

const Profile = () => {
  return (
    <StyledProfile>
      <StyledPhoto>
        <img src={photo} alt="Foto do Dev no Github" />
      </StyledPhoto>
      <StyledContent>
        <h2>Apelido do Dev</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Voluptatem provident quae odit
          fugiat eos a modi. Laboriosam numquam ad ex
          consequuntur voluptatum voluptate placeat delectus
          tenetur itaque, quam corrupti veritatis.
        </p>
        <span>
          <i class="fab fa-github"></i>
          <a href="#">URL do Github</a>
        </span>
      </StyledContent>
    </StyledProfile>
  );
};

export default Profile;
