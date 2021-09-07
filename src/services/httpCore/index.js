import HttpClient from './httpClient';

const baseURL = 'users.json';
const timeout = 1000;

const httpCore = new HttpClient({ baseURL, timeout });
export default httpCore;
