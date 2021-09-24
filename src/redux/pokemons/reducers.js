const defaultState = {
  inLoading: false,
  successLoad: false,
  pokeList: [],
};

function pokeReducer(state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_POKELIST': {
      return { ...state, pokeList: action.payload };
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

export default pokeReducer;
