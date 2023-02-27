import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
} from 'react';
import styled from 'styled-components';
import {
  AlignItems,
  Cursor,
  CustomBorder,
  FlexDirection,
  FlexWrap,
  JustifyContent,
  Position,
} from '@/types/style';

type FlexStyleProps = {
  width?: string;
  maxWidth?: string;
  minWidth?: string;
  height?: string;
  maxHeight?: string;
  minHeight?: string;
  flex?: string;
  gap?: string;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  flexWrap?: FlexWrap;
  position?: Position;
  overflow?: string;
  border?: CustomBorder;
  borderRadius?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  cursor?: Cursor;
}

type AbleElementType = 'div' | 'section' | 'main' | 'article' | 'aside' | 'header' | 'a' | 'footer';

type FlexOwnProps<T extends AbleElementType> = {
  tagName: T | undefined;
  className?: string;
  flexRef?: ComponentPropsWithRef<T>['ref'];
}

type FlexProps<T extends AbleElementType> = FlexStyleProps & FlexOwnProps<T> & ComponentPropsWithoutRef<T>

const Flex = <T extends AbleElementType>({
  className,
  alignItems,
  flexRef,
  tagName,
  children,
  ...props
}: FlexProps<T>): JSX.Element => {
  return (
    <FlexContainer
      as={tagName || 'div' as AbleElementType}
      ref={flexRef}
      className={className}
      alignItems={alignItems}
      {...props}
    >
      {children}
    </FlexContainer>
  );
}

const FlexContainer = styled.div<FlexStyleProps>`
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  max-height: ${({ maxHeight }) => maxHeight};
  position: ${({ position }) => position};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};
  flex: ${({ flex }) => flex};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  overflow: ${({ overflow }) => overflow};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ border }) => border?.all};
  border-top: ${({ border }) => border?.top};
  border-left: ${({ border }) => border?.left};
  border-right: ${({ border }) => border?.right};
  border-bottom: ${({ border }) => border?.bottom};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
`;

export default Flex;