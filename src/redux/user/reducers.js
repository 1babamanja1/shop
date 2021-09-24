import { getFromLocalStorage } from '../../services/localStorage';

const defaultState = {
  isAuthorized: getFromLocalStorage('isAuth') || false,
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
