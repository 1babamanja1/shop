import httpCore from '../httpCore';

export const register = (payload) => {
  const endpoint = httpCore.createFetch({
    url: '/api/registration',
    method: 'POST',
    data: payload,
  });
  return endpoint();
};

export const login = (payload) => {
  const endpoint = httpCore.createFetch({
    url: '/api/login',
    method: 'POST',
    data: payload,
  });
  return endpoint()
    .then((res) => res)
    .catch((e) => e.response);
};

export const getUser = () => {
  const endpoint = httpCore.createFetch({
    url: '',
    method: 'GET',
  });
  return endpoint();
};
