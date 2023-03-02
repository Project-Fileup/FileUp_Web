import generateFullURL from '@/utils/location/generateFullURL';
import objectToQueryString from '@/utils/string/objectToQueryString';
import dotenv from '../dotenv';
import { pageRoute } from './route';

const googleLoginQuery = objectToQueryString({
  response_type: 'code',
  scope: 'profile',
  client_id: dotenv.GOOGLE_CLIENT_ID,
  redirect_uri: generateFullURL(pageRoute.oauth.GOOGLE),
});

const GOOGLE_BASE_URL = 'https://accounts.google.com/o/oauth2/v2/auth' as const;

export const GOOGLE_LOGIN_URL = `${GOOGLE_BASE_URL}${googleLoginQuery}`;