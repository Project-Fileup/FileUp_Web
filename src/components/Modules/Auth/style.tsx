import { useCallback, MouseEvent, ReactNode } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { palette } from '@/styles/palette';
import Flex from '@/components/Common/Layout/Flex';
import CancelAbleInput from '@/components/Common/Input/CancelAbleInput';
import Button from '@/components/Common/Button';
import isEmpty from '@/utils/is-package/isEmpty';

export const FormWrapper = styled(Flex)`
  gap: 2.5rem;
  flex-direction: column;
`;

export const AuthInput = styled(CancelAbleInput)`
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.NORMAL};
  background-color: ${({ theme }) => theme.color.white};

  & input {
    padding: 0;
  }
`;

export const AuthButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.NORMAL};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
`;

export const AccountText = styled.p<{ color?: string; }>`
  font-family: ${({ theme }) => theme.font.pretendard.medium};
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ color }) => color};
`;

type SpaceLabelProps = {
  commonText: string;
  accentText: ReactNode;
  link: string;
  onClick?: (e: MouseEvent) => void | Promise<void>;
}

export const SpaceLabel = ({
  commonText,
  accentText,
  link,
  onClick,
}: SpaceLabelProps): JSX.Element => {
  const handleClick = useCallback((e: MouseEvent<HTMLAnchorElement>): void => {
    if (isEmpty(link)) {
      e.preventDefault();
      e.stopPropagation();

      if (typeof onClick === 'function') {
        onClick(e);
      }
    }
  }, [link, onClick]);

  return (
    <Flex
      gap='1.5rem'
      justifyContent='center'
    >
      <AccountText>{commonText}</AccountText>

      <Link
        href={{
          pathname: link,
        }}
        passHref
        shallow
      >
        <a
          onClick={handleClick}
        >
          <AccountText
            color={palette.main}
          >
            {accentText}
          </AccountText>
        </a>
      </Link>
    </Flex>
  )
}