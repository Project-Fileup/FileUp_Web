import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import dotenv from '../dotenv';

const createAxiosInstance = (config?: AxiosRequestConfig): AxiosInstance => {
  return axios.create({
    baseURL: dotenv.SERVER,
    timeout: 10 * 1000,
    timeoutErrorMessage: 'Request Timeout',
    ...config,
  });
}

export default createAxiosInstance;