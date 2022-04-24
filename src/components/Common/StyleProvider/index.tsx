import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { device } from '@/styles/device';
import { fontSize } from '@/styles/fontSize';
import { lightTheme } from '@/styles/theme';

type StyleProviderProps = {
  children: ReactNode;
}

const StyleProvider = ({
  children,
}: StyleProviderProps) => {
  return (
    <ThemeProvider
      theme={{
        color: lightTheme,
        device,
        fontSize,
      }}
    >
      {children}
    </ThemeProvider>
  )
}

export default StyleProvider;