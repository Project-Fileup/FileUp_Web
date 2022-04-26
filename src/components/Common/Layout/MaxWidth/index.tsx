import { ReactNode } from 'react';
import styled from 'styled-components';

type MaxWidthStyleProps = {
  margin?: string;
  padding?: string;
  minHeight?: string;
  backgroundColor?: string;
  maxWidth?: string;
  position?: 'absolute' | 'relative' | 'fixed' | 'static';
}

type MaxWidthProps = MaxWidthStyleProps & {
  className?: string;
  children: ReactNode;
}

const MaxWidth = ({
  margin = '0 auto',
  padding = '0 2rem',
  minHeight = 'auto',
  maxWidth,
  position = 'static',
  backgroundColor,
  className,
  children,
}: MaxWidthProps): JSX.Element => {
  return (
    <MaxWidthContentWrapper
      className={className}
      margin={margin}
      padding={padding}
      minHeight={minHeight}
      maxWidth={maxWidth}
      position={position}
      backgroundColor={backgroundColor}
    >
      {children}
    </MaxWidthContentWrapper>
  );
}

const MaxWidthContentWrapper = styled.div<MaxWidthProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  position: ${({ position }) => position};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default MaxWidth;