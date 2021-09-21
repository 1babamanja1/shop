const defaultState = {
  theme: 'light',
};

function themeReducer(state = defaultState, action) {
  switch (action.type) {
    case 'CHANGE_THEME': {
      let newTheme = state.theme;
      newTheme = (newTheme === 'light' ? 'dark' : 'light');
      return { ...state, theme: newTheme };
    }
    default: return state;
  }
}
export default themeReducer;
