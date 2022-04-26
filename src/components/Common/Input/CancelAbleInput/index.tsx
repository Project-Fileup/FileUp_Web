import {
  useCallback,
  memo,
  ChangeEvent,
  FocusEvent,
} from 'react';
import { CgClose } from 'react-icons/cg';
import styled from 'styled-components';
import useOutSideClick from '@/hooks/common/useOutSideClick';
import isEmpty from '@/utils/is-package/isEmpty';
import Input, { InputProps } from '..';

type CancelAbleInputProps = InputProps & {}

const CancelAbleInput = (props: CancelAbleInputProps): JSX.Element => {
  const {
    elementRef: inputRef,
    isFocus,
    setIsFocus,
  } = useOutSideClick<HTMLInputElement>();

  const onReset = useCallback((): void => {
    if (!inputRef.current || isEmpty(props.value)) {
      return;
    }

    props.onChange!({
      target: {
        name: props.name,
        value: '',
      },
    } as ChangeEvent<HTMLInputElement>);

    inputRef.current.focus();
  }, [inputRef, props]);

  const onBlur = useCallback((e?: FocusEvent<HTMLInputElement>): void => {
    if (e?.relatedTarget !== null) {
      setIsFocus(false);
    }
  }, [setIsFocus]);

  return (
    <CancelAbleInputWrapper
      className={props.className}
      isFocus={isFocus}
      margin={props.margin}
    >
      <Input
        {...props}
        margin='0'
        inputRef={inputRef}
        onFocus={() => setIsFocus(true)}
        onBlur={onBlur}
      />

      {
        // TODO: 데이터 state 연동시 아래 주석해제
        // !isEmpty(props.value) &&
        <ResetInput
          onClick={onReset}
        />
      }
    </CancelAbleInputWrapper>
  );
}

type CancelAbleInputWrapperProps = {
  isFocus: boolean;
  margin?: string;
}

const CancelAbleInputWrapper = styled.div<CancelAbleInputWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ margin }) => margin};
  border: ${({ theme }) => `1px solid ${theme.color.main}`};
`;

const ResetInput = styled(CgClose)`
  color: ${({ theme }) => theme.color.main};
  font-size: ${({ theme }) => theme.fontSize.BIG};
  cursor: pointer;
`;

export default memo(CancelAbleInput);