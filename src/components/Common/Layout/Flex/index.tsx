import { ReactNode, MouseEvent } from 'react';
import styled from 'styled-components';

type FlexStyleProps = {
  className?: string;
  width?: string;
  maxWidth?: string;
  height?: string;
  flex?: number;
  gap?: string;
  flexDirection?: 'column' | 'row';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'stretch';
  flexWrap?: 'wrap';
  position?: 'absolute' | 'relative' | 'static' | 'fixed';
  overflow?: string;
  margin?: string;
  padding?: string;
}

type FlexProps = FlexStyleProps & {
  onClick?: (e: MouseEvent) => void;
  children: ReactNode;
}

const Flex = ({
  width,
  maxWidth,
  height,
  flex,
  gap,
  flexDirection = 'row',
  justifyContent,
  alignItems = 'center',
  flexWrap,
  margin,
  padding,
  position = 'static',
  overflow = 'visible',
  className,
  onClick,
  children,
}: FlexProps): JSX.Element => {
  return (
    <FlexContainer
      className={className}
      width={width}
      maxWidth={maxWidth}
      height={height}
      gap={gap}
      flex={flex}
      flexWrap={flexWrap}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      padding={padding}
      position={position}
      overflow={overflow}
      onClick={onClick}
    >
      {children}
    </FlexContainer>
  );
}

const FlexContainer = styled.div<FlexStyleProps>`
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  position: ${({ position }) => position};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  overflow: ${({ overflow }) => overflow};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

export default Flex;