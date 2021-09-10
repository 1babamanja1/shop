import { ACTIONS } from '../constants';

const defaultState = {
  isAuthorized: false,
};

export function userReducer(state = defaultState, action) {
  switch (action.type) {
    case ACTIONS.SET_AUTHORIZED: {
      return { ...state, isAuthorized: true };
    }
    default: return state;
  }
}
