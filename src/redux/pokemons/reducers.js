const defaultState = {
  pokeList: [],
};

function pokeReducer(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_POKELIST': {
      return { ...state, pokeList: action.payload };
    }
    default: return state;
  }
}

export default pokeReducer;
