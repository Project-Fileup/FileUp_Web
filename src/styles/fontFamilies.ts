import {
  fonts,
  fontPaths,
} from '@/assets/fonts';

const fontFamilies = `
  @font-face {
    src: url(${fontPaths.pretendard.REGULAR}) format('woff2');
    font-family: ${fonts.pretendard.REGULAR};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url(${fontPaths.pretendard.MEDIUM}) format('woff2');
    font-family: ${fonts.pretendard.MEDIUM};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url(${fontPaths.pretendard.BOLD}) format('woff2');
    font-family: ${fonts.pretendard.BOLD};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  @font-face {
    src: url(${fontPaths.pretendard.SEMI_BOLD}) format('woff2');
    font-family: ${fonts.pretendard.SEMI_BOLD};
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }
`;

export default fontFamilies;