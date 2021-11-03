import axios from 'axios';
import requestHandler from './requestHandler';

class HttpClient {
  constructor(config) {
    this.config = config;
    this.axiosInstance = axios.create(config);
  }

  setAuthorizationToken(token) {
    this.axiosInstance.defaults.headers.common.Authorization = token;
  }

  createFetch({ url, ...reqSettings }) {
    return async () => {
      const result = await this.axiosInstance({ url, ...reqSettings });
      return result;
      // const auth = await requestHandler(url, { reqSettings, ...this.config });
      // test requestHandler need to change
    };
  }
}

export default HttpClient;
