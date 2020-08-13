import React from 'react';

import {
  StyledStarredRepository,
  StyledHeader,
  StyledContent,
  StyledFooter,
} from './starred-repository-styles';

const StarredRepository = () => {
  return (
    <StyledStarredRepository>
      <StyledHeader>
        <h3>
          <a href="https://github.com/asousajnri">
            Nome Repos
          </a>
        </h3>
        <button>
          Star <i className="far fa-star"></i>
        </button>
      </StyledHeader>
      <StyledContent>
        <p>
          Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. At assumenda totam nisi
          officiis, quo ex tempore laboriosam, quidem, saepe
          quos magnam impedit ullam. Fugiat quia natus
          laborum dolores quaerat dicta.
        </p>
      </StyledContent>
      <StyledFooter>
        <h4>
          <span className="ball"></span>
          JavaScript
        </h4>
        <h4>
          <i className="far fa-star"></i>
          4.1k
        </h4>
      </StyledFooter>
    </StyledStarredRepository>
  );
};

export default StarredRepository;
