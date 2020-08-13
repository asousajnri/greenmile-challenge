import React from 'react';

import {
  StyledStarredRepositories,
  Header,
  Content,
  Footer,
} from './starred-repositories-styles';

const StarredRepositories = () => {
  return (
    <StyledStarredRepositories>
      <li>
        <Header>
          <h3>
            <a href="#">Nome Repos</a>
          </h3>
          <button>
            Star <i class="far fa-star"></i>
          </button>
        </Header>
        <Content>
          <p>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. At assumenda totam nisi
            officiis, quo ex tempore laboriosam, quidem,
            saepe quos magnam impedit ullam. Fugiat quia
            natus laborum dolores quaerat dicta.
          </p>
        </Content>
        <Footer>
          <h4>
            <span class="ball"></span>
            JavaScript
          </h4>
          <h4>
            <i class="far fa-star"></i>
            4.1k
          </h4>
        </Footer>
      </li>

      <li>
        <Header>
          <h3>
            <a href="#">Nome Repos</a>
          </h3>
          <button>
            Star <i class="far fa-star"></i>
          </button>
        </Header>
        <Content>
          <p>
            Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. At assumenda totam nisi
            officiis, quo ex tempore laboriosam, quidem,
            saepe quos magnam impedit ullam. Fugiat quia
            natus laborum dolores quaerat dicta.
          </p>
        </Content>
        <Footer>
          <h4>
            <span class="ball"></span>
            JavaScript
          </h4>
          <h4>
            <i class="far fa-star"></i>
            4.1k
          </h4>
        </Footer>
      </li>
    </StyledStarredRepositories>
  );
};

export default StarredRepositories;
