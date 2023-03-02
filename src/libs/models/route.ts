export const pageRoute = {
  auth: {
    SIGN_IN: '/auth/sign-in',
    SIGN_UP: '/auth/sign-up',
  },

  oauth: {
    GOOGLE: '/oauth/google',
    NAVER: '/oauth/naver',
    KAKAO: '/oauth/kakao',
  },
} as const;