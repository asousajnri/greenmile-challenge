import React from 'react';

import { connect } from 'react-redux';

import {
  Container,
  UserSearch,
  UserInfos,
} from './components';

const App = ({ firstSearch, findedUser }) => {
  if (findedUser) {
    document.body.classList.add('heightAuto');
  }

  return (
    <Container findedUser={findedUser}>
      <UserSearch />
      {findedUser && <UserInfos />}
    </Container>
  );
};

export default connect(state => ({
  findedUser: state.findedUser,
  firstSearch: state.firstSearch,
}))(App);
