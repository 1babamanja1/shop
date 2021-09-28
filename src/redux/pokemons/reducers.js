const defaultState = {
  pokeList: [],
  fullPokeInfo: {},
};

function pokeReducer(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_POKELIST': {
      return { ...state, pokeList: action.payload };
    }
    case 'UPDATE_FULL_POKE_INFO': {
      return { ...state, fullPokeInfo: action.payload };
    }
    case 'CLEAR_FULL_INFO': {
      return { ...state, fullPokeInfo: {} };
    }
    default: return state;
  }
}

export default pokeReducer;
