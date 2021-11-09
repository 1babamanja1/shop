import axios from 'axios';

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
    };
  }
}

export default HttpClient;
