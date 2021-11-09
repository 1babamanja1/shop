import { getFromLocalStorage } from '../../services/localStorage';
import commonType from './consts';

const defaultState = {
  theme: getFromLocalStorage('theme'),
  inLoading: true,
  successLoad: false,
};

export default function commonReducer(state = defaultState, action) {
  switch (action.type) {
    case commonType.changeTheme: {
      let newTheme = state.theme;
      newTheme = (newTheme === 'light' ? 'dark' : 'light');
      return { ...state, theme: newTheme };
    }

    case commonType.startLoading: {
      return { ...state, inLoading: true };
    }
    case commonType.succeedLoading: {
      return { ...state, inLoading: false, successLoad: true };
    }
    case commonType.failLoading: {
      return { ...state, inLoading: false, successLoad: false };
    }
    default: return state;
  }
}
