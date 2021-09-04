import axios from 'axios';

const api = axios.create({
  baseURL: 'https://shaggy-lizard-5.loca.lt',
});

export default api;
