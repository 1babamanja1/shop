import pokeType from './consts';

const defaultState = {
  pokeList: [],
  showList: [],
  fullPokeInfo: {},
  inPokeLoading: true,
  successPokeLoad: false,
};

function pokeReducer(state = defaultState, action) {
  switch (action.type) {
    case pokeType.updatePokelist: {
      return { ...state, pokeList: action.payload, showList: action.payload };
    }
    case pokeType.updateFullPokeInfo: {
      return { ...state, fullPokeInfo: action.payload };
    }
    case pokeType.clearFullInfo: {
      return { ...state, fullPokeInfo: {} };
    }
    case pokeType.filterType: {
      let newPokeList = [...state.pokeList];
      newPokeList = newPokeList.filter((item) => item.type.includes(action.payload));
      return { ...state, showList: newPokeList };
    }
    case pokeType.clearFilters: {
      return { ...state, showList: state.pokeList };
    }
    case pokeType.startPokeLoading: {
      return { ...state, inPokeLoading: true, successPokeLoad: false };
    }
    case pokeType.succeedPokeLoading: {
      return { ...state, inPokeLoading: false, successPokeLoad: true };
    }
    case pokeType.failPokeLoading: {
      return { ...state, inPokeLoading: false, successPokeLoad: false };
    }
    default: return state;
  }
}

export default pokeReducer;
