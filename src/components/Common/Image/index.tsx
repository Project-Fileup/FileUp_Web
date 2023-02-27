import { Display } from '@/types/style';
import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

type ImageStyleProps = {
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
  borderRadius?: string;
  margin?: string;
  display?: Display;
}

type ImageOwnProps = ImgHTMLAttributes<HTMLImageElement> & {}

type ImageProps = ImageStyleProps & ImageOwnProps

const Image = (props: ImageProps): JSX.Element => {
  return (
    <CustomImage
      {...props}
    />
  );
}

const CustomImage = styled.img<ImageStyleProps>`
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  border-radius: ${({ borderRadius }) => borderRadius};
  margin: ${({ margin }) => margin};
  display: ${({ display }) => display};
`;

export default Image;