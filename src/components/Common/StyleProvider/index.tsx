import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { font } from '@/assets/fonts';
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
        font,
      }}
    >
      {children}
    </ThemeProvider>
  )
}

export default StyleProvider;