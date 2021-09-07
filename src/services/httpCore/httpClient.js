import axios from 'axios';
import newHttpError from './httpError';

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
        const response = await this.axiosInstance(url, reqSettings);
        return response.data;
      } catch (error) {
        const err = newHttpError(error);
        return (err.message);
      }
    };
  }
}

export default HttpClient;
