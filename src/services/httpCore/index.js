import HttpClient from './httpClient';

const baseURL = 'http://localhost:4000';
const timeout = 10000;

const httpCore = new HttpClient({ baseURL, timeout });
export default httpCore;
