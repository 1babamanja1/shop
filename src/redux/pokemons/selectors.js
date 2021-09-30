export const getPokes = (state) => state.pokeReducer.pokeList;
export const getShowList = (state) => state.pokeReducer.showList;
export const getFullInfoSelector = (state) => state.pokeReducer.fullPokeInfo;
export const getPokeLoadStatus = (state) => state.pokeReducer.inPokeLoading;
