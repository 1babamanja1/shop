export const getPokeList = () => ({ type: 'GET_POKELIST' });
export const updatePokeList = (payload) => ({
  type: 'UPDATE_POKELIST',
  payload,
});

export const getFullInfo = (payload) => ({
  type: 'GET_FULL_POKE_INFO',
  payload,
});

export const updateFullInfo = (payload) => ({
  type: 'UPDATE_FULL_POKE_INFO',
  payload,
});

export const clearFullInfo = (payload) => ({
  type: 'CLEAR_FULL_INFO',
  payload,
});
