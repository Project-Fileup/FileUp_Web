import { useState } from 'react';
import { NextComponentType } from 'next';
import App, {
  AppContext,
  AppInitialProps,
  AppProps,
} from 'next/app';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
import GlobalStyle from '@/styles/GlobalStyle';
import { wrapper } from '@/stores/nextStore';
import StyleProvider from '@/components/Providers/StyleProvider';

type MyAppProps = AppProps & {};

type CustomAppComponent = NextComponentType<AppContext, AppInitialProps, MyAppProps>;

const MyApp: CustomAppComponent = ({
  Component,
  pageProps,
}) => {
  const [queryClient] = useState<QueryClient>(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  }));

  const dehydrateState = pageProps?.dehydrateState;

  return (
    <QueryClientProvider
      client={queryClient}
    >
      <Hydrate
        state={dehydrateState}
      >
        <StyleProvider>
          <GlobalStyle />

          <Component
            {...pageProps}
          />
        </StyleProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

MyApp.getInitialProps = async (context) => {
  return await App.getInitialProps(context);
}

export default wrapper.withRedux(MyApp);