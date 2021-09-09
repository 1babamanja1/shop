const requestHandler = async (url, reqSettings) => {
  let result = null;

  switch (url) {
    case 'registration': {
      const { username, password } = reqSettings.data;
      if (username && password) {
        result = {
          success: true,
        };
      } else {
        throw new Error('Data is not provided');
      }
      break;
    }
    case 'login': {
      const { username, password } = reqSettings.data;
      if (username === 'test' && password === 'test') {
        result = {
          token: 'TESTKRASIVIYTOKEN',
        };
      } else {
        throw new Error('Creds is wrong');
      }
      break;
    }
    default: {
      break;
    }
  }
  return result;
};

export default requestHandler;
