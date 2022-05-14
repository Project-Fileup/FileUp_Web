import { createGlobalStyle } from 'styled-components';
import { disableDrag } from '@/styles/libStyle';
import { styleReset } from '@/styles/reset';

const GlobalStyle = createGlobalStyle`
  ${styleReset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font.pretendard.regular};
  }

  html,
  body,
  #__next {
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    ${disableDrag};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;