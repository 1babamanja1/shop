import httpCore from '../httpCore';

const authenticate = (payload) => {
  const endpoint = httpCore.createFetch({
    url: '',
    method: 'POST',
    data: payload,
  });
  return endpoint();
};

export default authenticate;
