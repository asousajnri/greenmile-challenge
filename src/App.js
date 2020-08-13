import React, { useState } from 'react';

import { connect } from 'react-redux';

import {
  Container,
  UserSearch,
  UserInfos,
} from './components';

const App = () => {
  return (
    <Container>
      <UserSearch />
      <UserInfos />
    </Container>
  );
};

export default App;
