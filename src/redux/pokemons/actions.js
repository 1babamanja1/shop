export const updatePokeList = (payload) => ({
  type: 'UPDATE_POKELIST',
  payload,
});
export const startLoading = () => ({
  type: 'START_LOADING',
});
export const succeedLoading = () => ({
  type: 'SUCCEED_LOADING',
});
export const failLoading = () => ({
  type: 'FAIL_LOADING',
});
export const getPokeList = () => ({ type: 'GET_POKELIST' });
