export const getPokes = (state) => state.commonReducer.pokeList || [];
export const getLoadingStatus = (state) => state.commonReducer.inLoading;
export const getLoadSuccess = (state) => state.commonReducer.successLoad;
