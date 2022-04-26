import {
  InputHTMLAttributes,
  Dispatch,
  SetStateAction,
  RefObject,
  memo,
} from 'react';
import styled from 'styled-components';

type InputStyleProps = {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: string;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  InputStyleProps &
  {
    setValue?: Dispatch<SetStateAction<string>>;
    inputRef?: RefObject<HTMLInputElement>;
  };

const Input = (props: InputProps): JSX.Element => {
  const {
    inputRef,
    margin,
    className,
  } = props;

  return (
    <InputWrapper
      margin={margin}
    >
      <InputContainer
        className={className}
        ref={inputRef}
        {...props}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div<InputStyleProps>`
  width: 100%;
  margin: ${({ margin }) => margin};
`;

const InputContainer = styled.input<InputStyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  outline: none;
`;

export default memo(Input);