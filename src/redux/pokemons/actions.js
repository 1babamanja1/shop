export const updatePokeList = (payload) => ({
  type: 'UPDATE_POKELIST',
  payload,
});

export const getPokeListFromServer = () => ({ type: 'GET_POKELIST' });
