import INITIAL_STATE from './initial-state';

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'IS_FETCHINGING') {
    return {
      ...state,
      isFetchinging: action.isFetchinging,
    };
  }

  if (action.type === 'SET_DEV_DATA') {
    return {
      ...state,
      devData: action.devData,
    };
  }

  if (action.type === 'FIRED_SEARCH') {
    return {
      ...state,
      firedSearch: action.firedSearch,
    };
  }

  if (action.type === 'FINDED_USER') {
    return {
      ...state,
      findedUser: action.findedUser,
    };
  }

  return state;
};

export default reducer;
