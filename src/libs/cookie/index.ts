import { CookieSerializeOptions } from 'cookie';
import {
  getCookie,
  setCookie,
  deleteCookie,
  CookieValueTypes,
} from 'cookies-next';
import { ServerResponse, IncomingMessage } from 'http';

export type CookieOption = CookieSerializeOptions & {
  res?: ServerResponse;
  req?: IncomingMessage & {
    cookies?: Record<string, string> |
      Partial<Record<string, string>>;
  };
}

class Cookie {
  set<T>(key: string, data: T, options?: CookieOption): void {
    setCookie(key, data, options);
  }

  get(key: string): CookieValueTypes {
    return getCookie(key);
  }

  delete(key: string): void {
    deleteCookie(key);
  }
}

export default new Cookie();