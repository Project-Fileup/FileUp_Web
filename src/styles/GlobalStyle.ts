import { createGlobalStyle } from 'styled-components';
import { disableDrag } from '@/styles/libStyle';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }

  img {
    ${disableDrag};
  }
`;

export default GlobalStyle;