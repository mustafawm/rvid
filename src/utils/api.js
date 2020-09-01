import axios from 'axios';

const instance = axios.create({
  baseURL: '', // create react app env vars
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  }
});

export default instance;