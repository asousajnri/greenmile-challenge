export const setDevData = data => {
  localStorage.setItem('greenmile', JSON.stringify(data));

  return {
    type: 'SET_DEV_DATA',
    devData: data,
  };
};

export const firedSearch = firedSearchValue => {
  return {
    type: 'FIRED_SEARCH',
    firedSearch: firedSearchValue,
  };
};

export const findedUser = findedUserValue => {
  return {
    type: 'FINDED_USER',
    findedUser: findedUserValue,
  };
};

export const ifFetchinging = ifFetchingingValue => {
  return {
    type: 'IS_FETCHINGING',
    isFetchinging: ifFetchingingValue,
  };
};
