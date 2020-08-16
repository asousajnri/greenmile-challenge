import React from 'react';
import { connect } from 'react-redux';
import base64 from 'base-64';

// import axios from 'axios';
import * as api from '../../../../services/api';

import StarredRepositoryLoading from './starred-repository-loading';

import {
  StyledStarredRepository,
  StyledHeader,
  StyledContent,
  StyledFooter,
} from './starred-repository-styles';

const StarredRepository = ({
  isFetchinging,
  repo_id,
  owner_login,
  repo_name,
  findedUser,
  fullName,
  git_url,
  language,
  stargazers_count,
  description,
}) => {
  const handleStarRepository = async () => {
    // const response = await api.user.put(
    //   `/starred/${owner_login}/${repo_name}`,
    //   {
    //     headers: {
    //       'content-length': '0',
    //       authorization: `Basic ${base64.encode(
    //         'user:password'
    //       )}`,
    //     },
    //   }
    // );

    const response = await api.user.get({
      headers: {
        'content-length': '0',
        authorization: `Basic ${base64.encode(
          'asousajnri:joao832verdade'
        )}`,
      },
    });

    // lEazw4PFcrR2oAEp5QFDHRBoh3JHAJhd

    // const url =
    //   'http://www.mapquestapi.com/geocoding/v1/caucaia?key=lEazw4PFcrR2oAEp5QFDHRBoh3JHAJhd&location=Brazil';
    // const response = await axios.get(url);

    console.log(response);
  };

  return (
    <>
      {isFetchinging ? (
        <StarredRepositoryLoading />
      ) : (
        <StyledStarredRepository>
          <StyledHeader>
            <h3>
              <a href={git_url}>{fullName}</a>
            </h3>
            <button onClick={handleStarRepository}>
              Star <i className="far fa-star"></i>
            </button>
          </StyledHeader>
          <StyledContent>
            <p>{description}</p>
          </StyledContent>
          <StyledFooter>
            <h4>
              <span className="ball"></span>
              {language}
            </h4>
            <h4>
              <i className="far fa-star"></i>
              {stargazers_count}
            </h4>
          </StyledFooter>
        </StyledStarredRepository>
      )}
    </>
  );
};

export default connect(state => ({
  isFetchinging: state.isFetchinging,
}))(StarredRepository);
