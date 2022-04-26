import { css, FlattenSimpleInterpolation } from 'styled-components';

export const ellipsisLine = (line: number, maxWidth?: string): FlattenSimpleInterpolation => css`
  max-width: ${maxWidth};
  display: -webkit-box;
  -webkit-line-clamp: ${line};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const disableDrag = css`
  user-select: none;
  -webkit-user-drag: none;
`;

export const setMinMaxWidth = (min: string, max: string): FlattenSimpleInterpolation => css`
  min-width: ${min};
  max-width: ${max};
`;

export const setMinMaxHeight = (min: string, max: string): FlattenSimpleInterpolation => css`
  min-height: ${min};
  max-height: ${max};
`;