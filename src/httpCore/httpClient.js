import axios from "axios";
import newHttpError from './httpError'

class HttpClient {
  constructor(config) {
    this.config = config;
    this.axiosInstance = axios.create(config);
  }

  createFetch({ url, ...reqSettings }) {
    return async () => {
      try{
      const response = await this.axiosInstance(url, reqSettings);
      return response.data;}

      catch (error){
        let err = newHttpError(error)
        console.log(err.message)
      }
    };
  }
}

export default HttpClient;