const constants = {
  token: {
    ACCESS_TOKEN_KEY: 'access_token',
    REFRESH_TOKEN_KEY: 'refresh_token',
  },

  request: {
    TIMEOUT_SECONDS: 10 * 1000,
    TIMEOUT_MESSAGE: 'Request Timeout',
    AUTHORIZATION: 'Authorization',
  },
} as const;

export default constants;