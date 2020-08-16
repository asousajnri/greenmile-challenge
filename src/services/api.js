import axios from 'axios';

export const users = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export const user = axios.create({
  baseURL: 'https://api.github.com/user',
});
