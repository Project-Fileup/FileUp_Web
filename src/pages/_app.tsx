import { NextComponentType } from 'next';
import {
  AppContext,
  AppInitialProps,
  AppProps,
} from 'next/app';
import GlobalStyle from '@/styles/GlobalStyle';
import StyleProvider from '@/components/Common/StyleProvider';

type CustomAppComponent = NextComponentType<AppContext, AppInitialProps, AppProps>;

const FileUpApp: CustomAppComponent = ({
  Component,
  pageProps,
}) => {
  return (
    <StyleProvider>
      <Component {...pageProps} />
    
      <GlobalStyle />
    </StyleProvider>
  );
}

export default FileUpApp;