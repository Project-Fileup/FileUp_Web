import { device } from '@/styles/device';
import { fontSize } from '@/styles/fontSize';
import { palette } from '@/styles/palette'

export const lightTheme = {
  ...palette,
} as const;

export type Theme = {
  color: typeof lightTheme;
  device: typeof device;
  fontSize: typeof fontSize;
}