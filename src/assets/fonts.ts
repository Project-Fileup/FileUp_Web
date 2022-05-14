import generateStaticPath from '@/utils/assets/generateStaticPath';

export const fontPath = {
  pretendard: {
    black: generateStaticPath('/fonts/pretendard/pretendard-black.woff2'),
    bold: generateStaticPath('/fonts/pretendard/pretendard-bold.woff2'),
    semiBold: generateStaticPath('/fonts/pretendard/pretendard-semi-bold.woff2'),
    medium: generateStaticPath('/fonts/pretendard/pretendard-medium.woff2'),
    regular: generateStaticPath('/fonts/pretendard/pretendard-regular.woff2'),
  },
};

export const font = {
  pretendard: {
    black: 'Pretendard-Black',
    bold: 'Pretendard-Bold',
    semiBold: 'Pretendard-SemiBold',
    medium: 'Pretendard-Medium',
    regular: 'Pretendard-Regular',
  },
};