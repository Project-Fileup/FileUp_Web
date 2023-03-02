import { fonts } from '@/assets/fonts';
import camelToKebab from '@/utils/string/camelToKebab';
import { fontSize } from '@/styles/fontSize';
import { device } from './device';
import { media } from './media';
import { palette } from './palette';

export const lightTheme = {
  theme: '#f2f2f2',
  contrast: '#2c2c2c',

  background1: '#f9f9f9',
  background2: '#f1f3f8',
  background3: '#eaeaed',
  background4: '#9e9e9e',

  border1: '#eaeaed',
  border2: '#dee2e6',
  border3: '#b5b5b5',
  border4: '#343a40',

  text1: '#a6a7ab',
  text2: '#707070',
  text3: '#616161',
  text4: '#2c2c2c',
} as const;

export const darkTheme = {
  theme: '#2c2c2c',
  contrast: '#f2f2f2',

  background1: '#2e2e2e',
  background2: '#252525',
  background3: '#1e1e1e',
  background4: '#121212',

  border1: '#2a2a2a',
  border2: '#4d4d4d',
  border3: '#a0a0a0',
  border4: '#e0e0e0',

  text1: '#595959',
  text2: '#acacac',
  text3: '#d9d9d9',
  text4: '#ececec',
} as const;

const generateCSSVariablePalette = <T extends Record<string, string>>(
  themePalette: T,
): Record<string, string> => {
  return Object.entries(themePalette).reduce((prev, [key, value]) => {
    prev[`--${camelToKebab(key)}`] = value;
    return prev;
  }, {} as Record<string, string>);
}

const generateVariablePalette = <T extends Record<string, string>>(
  themePalette: T,
): Record<keyof T, string> => {
  return Object.keys(themePalette).reduce((prev, key) => {
    prev[key as keyof T] = `var(--${camelToKebab(key)})`;
    return prev;
  }, {} as Record<keyof T, string>);
}

export const cssPalette = generateVariablePalette(palette);

export const lightThemeVariables = generateCSSVariablePalette({
  ...lightTheme,
  ...palette,
});

export const lightThemePalette = generateVariablePalette({
  ...lightTheme,
  ...palette,
});

export const darkThemeVariables = generateCSSVariablePalette({
  ...darkTheme,
  ...palette,
});

export const darkThemePalette = generateVariablePalette({
  ...darkTheme,
  ...palette,
});

export type CustomTheme = {
  color: typeof lightThemePalette;
  fontSize: typeof fontSize;
  fontFamily: typeof fonts;
  device: typeof device;
  media: typeof media;
};