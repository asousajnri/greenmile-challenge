import React, { useState } from 'react';

import { connect } from 'react-redux';

import {
  Container,
  UserSearch,
  UserInfos,
  LogMessage,
} from './components';

const App = ({ firstSearch }) => {
  return (
    <Container>
      <UserSearch />
      {firstSearch && <UserInfos />}
    </Container>
  );
};

export default connect(state => ({
  firstSearch: state.firstSearch,
}))(App);
