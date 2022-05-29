import generateStaticPath from '@/utils/assets/generateStaticPath';

export const icons = {
  logo: {
    SVG_LOGO: generateStaticPath('/icons/logo/fileup_logo.svg'),
    PNG_LOGO: generateStaticPath('/icons/logo/fileup_logo.png'),
  },

  auth: {
    FACEBOOK: generateStaticPath('/icons/auth/facebook.png'),
    KAKAOTALK: generateStaticPath('/icons/auth/kakaotalk.png'),
    GOOGLE: generateStaticPath('/icons/auth/google.png'),
  },
};