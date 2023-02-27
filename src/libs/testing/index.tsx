import {
  useState,
  ReactElement,
  ReactNode,
} from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { RenderOptions, render, RenderResult } from '@testing-library/react';
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
} from '@tanstack/react-query';
import { rootReducer, Store } from '@/stores';
import StyleProvider from '@/components/Providers/StyleProvider';

type TestingProviderProps = {
  children: ReactNode;
}

const TestingProvider = ({
  children,
}: TestingProviderProps) => {
  const [store] = useState<Store>(() => configureStore({
    reducer: rootReducer,
  }));

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

  return (
    <QueryClientProvider
      client={queryClient}
    >
      <Hydrate>
        <Provider
          store={store}
        >
          <StyleProvider>
            {children}
          </StyleProvider>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => {
  return render(ui, {
    wrapper: TestingProvider,
    ...options,
  });
}

export * from '@testing-library/react';

export { customRender as render };