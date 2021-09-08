import httpCore from '../httpCore';

export const register = (payload) => {
  const endpoint = httpCore.createFetch({
    url: '',
    method: 'POST',
    data: payload,
  });
  return endpoint();
};

export const getUser = () => {
  const endpoint = httpCore.createFetch({
    url: '',
    method: 'GET',
  });
  return endpoint();
};