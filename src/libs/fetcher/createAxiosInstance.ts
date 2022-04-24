import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import constants from '@/constants';
import dotenv from '@/libs/dotenv';

const createAxiosInstance = (config?: AxiosRequestConfig): AxiosInstance => {
  return axios.create({
    ...config,
    baseURL: dotenv.SERVER,
    timeout: constants.request.TIMEOUT_SECONDS,
    timeoutErrorMessage: constants.request.TIMEOUT_MESSAGE,
  });
}

export default createAxiosInstance;