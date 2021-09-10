import axios from 'axios';
import newHttpError from './httpError';
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
      try {
        // const response = await this.axiosInstance(url, reqSettings);
        // test requestHandler need to change
        return await requestHandler(url, { reqSettings, ...this.config });
      } catch (error) {
        throw newHttpError(error);
      }
    };
  }
}

export default HttpClient;
