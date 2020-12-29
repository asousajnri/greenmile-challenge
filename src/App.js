import React from 'react';

const App = ({ findedUser }) => {
  return (
    <h1></h1>
  );
};

export default connect(state => ({
  findedUser: state.findedUser,
}))(App);
