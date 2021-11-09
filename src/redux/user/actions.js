import userType from './consts';

export const setAuthorized = (payload) => ({
  type: userType.setAuthorized,
  payload,
});

export const setUnauthorized = () => ({
  type: userType.setUnauthorized,
});

export const setRole = (payload) => ({
  type: userType.setRole,
  payload,
});
