import { getFromLocalStorage } from '../../services/localStorage';

const defaultState = {
  isAuthorized: getFromLocalStorage('isAuth'),
};

function userReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_AUTHORIZED': {
      return { ...state, isAuthorized: true };
    }
    case 'SET_UNAUTHORIZED': {
      return { ...state, isAuthorized: false };
    }
    case 'INIT_AUTHORIZATION': {
      const currentState = getFromLocalStorage('isAuth');
      return { ...state, isAuthorized: currentState };
    }
    default: return state;
  }
}

export default userReducer;
