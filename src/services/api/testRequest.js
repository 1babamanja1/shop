import httpCore from '../httpCore';
import newHttpError from '../httpCore/httpError';

const values = {
  name: 'Hanna',
  password: '123123Aa',
};
const testRequest = () => {
  const user = httpCore.createFetch({
    url: '',
    method: 'GET',
  });
  user().then((res) => {
    if (res.users[0].name === values.name && res.users[0].password === values.password) {
      httpCore.setAuthorizationToken('token');
    } else throw newHttpError('Authorization error');
  });
};

export default testRequest;
