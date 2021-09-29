export const getPokes = (state) => state.pokeReducer.pokeList;
export const getFullInfoSelector = (state) => state.pokeReducer.fullPokeInfo;
export const getPokeLoadStatus = (state) => state.pokeReducer.inPokeLoading;
