import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import createAxiosInstance from '@/libs/fetcher/createAxiosInstance';
import { requestHandler } from '@/libs/fetcher/request';
import { responseHandler } from '@/libs/fetcher/response';

const cacheAxios = createAxiosInstance({
  adapter: cacheAdapterEnhancer(axios.defaults.adapter!),
  headers: {
    'Cache-Control': 'no-cache',
  },
});

cacheAxios.interceptors.response.use(responseHandler);

const authAxios = createAxiosInstance();

authAxios.interceptors.request.use(requestHandler);
authAxios.interceptors.response.use(responseHandler);

export {
  cacheAxios,
  authAxios,
};