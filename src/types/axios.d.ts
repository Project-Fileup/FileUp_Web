import 'axios';

declare module 'axios' {
  interface AxiosRequestConfig {
    cache?: boolean;
    disableTimeoutHandle?: boolean;
  }
}