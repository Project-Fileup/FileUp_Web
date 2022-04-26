import {
  useCallback,
  ReactNode,
  CSSProperties,
  ButtonHTMLAttributes,
  MouseEvent,
} from 'react';
import styled from 'styled-components';
import throttle from '@/utils/timer/throttle';
import { palette } from '@/styles/palette';
import { disableDrag } from '@/styles/libStyle';
import Spinner from '../Spinner';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: 'light' | 'medium' | 'bold';
  fontFamily?: string;
  enableThrottle?: boolean;
  onClick: (e: MouseEvent) => void;
  backgroundColor?: string;
  color?: string;
  spinnerColor?: string;
  children: ReactNode;
  isLoading?: boolean;
  isHidden?: boolean;
  position?: 'absolute' | 'relative' | 'fixed' | 'static';
  flex?: number;
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
  border?: string;
  borderRadius?: string;
  boxShadow?: string;
  cursor?: 'pointer' | 'default';
  style?: CSSProperties;
}

const Button = ({
  width = '130px',
  height = '30px',
  margin = '0 0 0 0',
  padding = '0 0 0 0',
  fontSize = '12px',
  fontWeight = 'medium',
  fontFamily,
  enableThrottle = false,
  onClick,
  backgroundColor,
  color,
  spinnerColor = 'white',
  children,
  position = 'static',
  flex,
  justifyContent = 'center',
  isLoading = false,
  isHidden = false,
  border = 'none',
  borderRadius = '5px',
  boxShadow,
  cursor = 'pointer',
  style,
  className,
}: ButtonProps): JSX.Element => {
  const handleClick = useCallback((e: MouseEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if (isLoading) {
      return;
    }

    onClick(e);
  }, [isLoading, onClick]);

  return (
    <ButtonWrapper
      className={className}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      isHidden={isHidden}
      onClick={enableThrottle ? throttle(handleClick, 500) : handleClick}
      position={position}
      flex={flex}
      justifyContent={justifyContent}
      border={border}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      cursor={cursor}
      style={style}
    >
      {
        isLoading ?
        <Spinner
          width={22}
          height={22}
          strokeWidth={3}
          color={spinnerColor}
          secondaryColor={spinnerColor}
        /> : children
      }
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  color: ${({ color }) => color};
  border: ${({ border }) =>
    border === 'none' ? 'none' : `1px solid ${border}`};
  outline: none;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  position: ${({ position }) => position};
  display: flex;
  flex: ${({ flex }) => flex};
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};
  visibility: ${({ isHidden }) => (isHidden ? 'hidden' : 'visible')};
  box-shadow: ${({ boxShadow }) => boxShadow};
  ${disableDrag};
  cursor: ${({ cursor }) => cursor};
`;

export default Button;
