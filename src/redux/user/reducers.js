const defaultState = {
  isAuthorized: false,
};

function userReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_AUTHORIZED': {
      return { ...state, isAuthorized: true };
    }
    case 'SET_UNAUTHORIZED': {
      return { ...state, isAuthorized: false };
    }
    default: return state;
  }
}

export default userReducer;
