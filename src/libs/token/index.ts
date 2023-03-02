import axios from 'axios';
import { Buffer } from 'buffer';
import dayjs from 'dayjs';
import { TokenKey } from '@/enums/auth';
import isServer from '@/utils/is-package/isServer';
import cookie, { CookieOption } from '../cookie';

export type JwtPayload = Record<string, unknown> & {
  iss?: string | undefined;
  sub?: string | undefined;
  aud?: string | string[] | undefined;
  exp?: number | undefined;
  nbf?: number | undefined;
  iat?: number | undefined;
  jti?: string | undefined;
}

class Token {
  set(tokenKey: string, token: string, options?: CookieOption): void {
    const expiredAt = dayjs().add(7, 'days').toDate();

    cookie.set(tokenKey, token, {
      ...options,
      expires: expiredAt,
    });
  }

  get(tokenKey: string): string {
    switch (tokenKey) {
      case TokenKey.ACCESS_TOKEN:
        if (isServer()) {
          const axiosToken = axios.defaults.headers.common[TokenKey.REQUEST_TOKEN];

          return axiosToken?.replace('Bearer ', '');
        }
    }

    return cookie.get(tokenKey) as string;
  }

  decode(token: string): JwtPayload | undefined {
    try {
      const base64Payload = token?.split('.')[1];
      const payload = Buffer.from(base64Payload, 'base64');

      return JSON.parse(String(payload)) as JwtPayload;
    } catch (error) {

    }
  }

  clear(): void {
    cookie.delete(TokenKey.ACCESS_TOKEN);
    cookie.delete(TokenKey.REFRESH_TOKEN);

    axios.defaults.headers.common[TokenKey.REQUEST_TOKEN] = '';
  }
}

export default new Token();