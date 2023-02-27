import { createGlobalStyle} from 'styled-components';
import reset from './reset';
import {
  lightTheme,
  lightThemeVariables,
} from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fontFamily.pretendard.REGULAR};
  }

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }

  html {
    ${lightThemeVariables};
    color: ${lightTheme.contrast};
    background-color: ${lightTheme.theme};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  // Firefox
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;