import generateStaticPath from '@/utils/assets/generateStaticPath';

export const icons = {
  logo: {
    SVG_LOGO: generateStaticPath('/icons/logo/fileup_logo.svg'),
    PNG_LOGO: generateStaticPath('/icons/logo/fileup_logo.png'),
  },

  auth: {
    APPLE: generateStaticPath('/icons/auth/apple.svg'),
    NAVER: generateStaticPath('/icons/auth/naver.svg'),
    KAKAOTALK: generateStaticPath('/icons/auth/kakaotalk.svg'),
    GOOGLE: generateStaticPath('/icons/auth/google.svg'),
  },
};