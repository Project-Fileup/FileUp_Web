import styled from 'styled-components';
import Flex from '@/components/Common/Layout/Flex';
import CancelAbleInput from '@/components/Common/Input/CancelAbleInput';
import Button from '@/components/Common/Button';

export const FormWrapper = styled(Flex)`
  gap: 1.75rem;
  flex-direction: column;
`;

export const AuthInput = styled(CancelAbleInput)`
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.NORMAL};

  & input {
    padding: 0;
  }
`;

export const AuthButton = styled(Button)`
  font-size: ${({ theme }) => theme.fontSize.NORMAL};
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.main};
`;

export const AccountText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  cursor: pointer;
`;