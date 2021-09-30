import pokeType from './consts';

export const getPokeList = () => ({
  type: pokeType.getPokelist,
});

export const updatePokeList = (payload) => ({
  type: pokeType.updatePokelist,
  payload,
});

export const getFullInfo = (payload) => ({
  type: pokeType.getFullPokeInfo,
  payload,
});

export const updateFullInfo = (payload) => ({
  type: pokeType.updateFullPokeInfo,
  payload,
});

export const clearFullInfo = (payload) => ({
  type: pokeType.clearFullInfo,
  payload,
});

export const filterType = (payload) => ({
  type: pokeType.filterType,
  payload,
});

export const clearFilters = () => ({
  type: pokeType.clearFilters,
});

export const startPokeLoading = () => ({
  type: pokeType.startPokeLoading,
});
export const succeedPokeLoading = () => ({
  type: pokeType.succeedPokeLoading,
});
export const failPokeLoading = () => ({
  type: pokeType.failPokeLoading,
});
