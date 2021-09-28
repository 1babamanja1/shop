import { getFromLocalStorage, saveToLocalStorage } from '../../services/localStorage';

const defaultState = {
  theme: getFromLocalStorage('theme'),
  inLoading: false,
  successLoad: false,
};

export default function commonReducer(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_THEME': {
      let newTheme = state.theme;
      newTheme = (newTheme === 'light' ? 'dark' : 'light');
      saveToLocalStorage('theme', newTheme);
      return { ...state, theme: newTheme };
    }

    case 'START_LOADING': {
      return { ...state, inLoading: true };
    }
    case 'SUCCEED_LOADING': {
      return { ...state, inLoading: false, successLoad: true };
    }
    case 'FAIL_LOADING': {
      return { ...state, inLoading: false, successLoad: false };
    }
    default: return state;
  }
}
