import { getFromLocalStorage, saveToLocalStorage } from '../../services/localStorage';

const defaultState = {
  theme: getFromLocalStorage('theme'),
};

function themeReducer(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_THEME': {
      let newTheme = state.theme;
      newTheme = (newTheme === 'light' ? 'dark' : 'light');
      saveToLocalStorage('theme', newTheme);
      return { ...state, theme: newTheme };
    }
    default: return state;
  }
}
export default themeReducer;
