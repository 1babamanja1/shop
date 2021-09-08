import HttpClient from './httpClient';

const baseURL = 'http://localhost:3000/users.json';
const timeout = 1000;

const httpCore = new HttpClient({ baseURL, timeout });
export default httpCore;
