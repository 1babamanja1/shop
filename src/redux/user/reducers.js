import { getFromLocalStorage, saveToLocalStorage } from '../../services/localStorage';

const defaultState = {
  isAuthorized: getFromLocalStorage('isAuth'),
};

function userReducer(state = defaultState, action) {
  switch (action.type) {
    case 'SET_AUTHORIZED': {
      saveToLocalStorage('isAuth', true);
      return { ...state, isAuthorized: true };
    }
    case 'SET_UNAUTHORIZED': {
      saveToLocalStorage('isAuth', false);
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
