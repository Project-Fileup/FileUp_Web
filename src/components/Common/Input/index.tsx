import {
  useCallback,
  InputHTMLAttributes,
  Dispatch,
  SetStateAction,
  RefObject,
  memo,
  KeyboardEvent,
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
    onEnter?: () => void;
  };

const Input = (props: InputProps): JSX.Element => {
  const {
    inputRef,
    margin,
    className,
    onEnter,
  } = props;

  const handleEnter = useCallback((e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key !== 'Enter') {
      return;
    }

    if (typeof onEnter === 'function') {
      onEnter();
    }
  }, [onEnter]);

  return (
    <InputWrapper
      margin={margin}
    >
      <InputContainer
        className={className}
        ref={inputRef}
        {...props}
        onKeyDown={handleEnter}
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