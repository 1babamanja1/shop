import jwt from 'jwt-decode';
import { getFromCookie } from '../../services/localStorage';
import userType from './consts';

const defaultState = {
  isAuthorized: getFromCookie('auth') || '',
  role: getFromCookie('auth') ? jwt(getFromCookie('auth')).role : '',
};

function userReducer(state = defaultState, action) {
  switch (action.type) {
    case userType.setAuthorized: {
      const token = action.payload;
      return { ...state, isAuthorized: token };
    }
    case userType.setUnauthorized: {
      return { ...state, isAuthorized: '' };
    }
    case userType.setRole: {
      const role = action.payload;
      return { ...state, role };
    }
    default:
      return state;
  }
}

export default userReducer;
