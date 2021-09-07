import httpCore from '../httpCore';

const testRequest = () => {
  const endpoint = httpCore.createFetch({
    url: '',
    method: 'GET',
  }).then((res) => console.log(res));
  return endpoint();
};
export default testRequest;
