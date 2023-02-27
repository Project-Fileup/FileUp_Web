import axios from 'axios';
import createAxiosInstance from './createAxiosInstance';

export const commonAxios = createAxiosInstance({
  adapter: axios.defaults.adapter,
  headers: {
    'Cache-Control': 'no-cache',
  },
});

export const authAxios = createAxiosInstance();