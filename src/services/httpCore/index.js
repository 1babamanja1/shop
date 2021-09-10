import HttpClient from './httpClient';

const baseURL = '';
const timeout = 1000;

const httpCore = new HttpClient({ baseURL, timeout });
export default httpCore;
