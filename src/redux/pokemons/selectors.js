export const getPokes = (state) => state.pokeReducer.pokeList || [];

export const getFullInfoSelector = (state) => state.pokeReducer.fullPokeInfo || {};
