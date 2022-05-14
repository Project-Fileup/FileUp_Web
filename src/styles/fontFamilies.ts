import {
  font,
  fontPath,
} from '@/assets/fonts';

const fontFamilies = `
  @font-face {
    src: url(${fontPath.pretendard.regular}) format('woff2');
    font-family: ${font.pretendard.regular};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url(${fontPath.pretendard.medium}) format('woff2');
    font-family: ${font.pretendard.medium};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url(${fontPath.pretendard.bold}) format('woff2');
    font-family: ${font.pretendard.bold};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url(${fontPath.pretendard.semiBold}) format('woff2');
    font-family: ${font.pretendard.semiBold};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url(${fontPath.pretendard.black}) format('woff2');
    font-family: ${font.pretendard.black};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
`;

export default fontFamilies;