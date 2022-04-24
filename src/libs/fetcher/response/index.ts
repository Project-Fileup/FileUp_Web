import { AxiosResponse } from 'axios';

export const responseHandler = (config: AxiosResponse): AxiosResponse => {
  return config;
}