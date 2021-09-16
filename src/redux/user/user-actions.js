export function setAuthorized() {
  return {
    type: 'SET_AUTHORIZED',
  };
}

export const getAuthorized = (state) => state.userReducer.isAuthorized;
