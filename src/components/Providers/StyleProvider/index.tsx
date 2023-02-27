import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { fonts } from '@/assets/fonts';
import { device } from '@/styles/device';
import { fontSize } from '@/styles/fontSize';
import { lightThemePalette } from '@/styles/theme';
import { media } from '@/styles/media';

type StyleProviderProps = {
  children: ReactNode;
}

const StyleProvider = ({
  children,
}: StyleProviderProps) => {
  return (
    <ThemeProvider
      theme={{
        color: lightThemePalette,
        device,
        media,
        fontSize,
        fontFamily: fonts,
      }}
    >
      {children}
    </ThemeProvider>
  )
}

export default StyleProvider;