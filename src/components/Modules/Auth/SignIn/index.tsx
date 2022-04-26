import styled, { useTheme } from 'styled-components';
import CancelAbleInput from '@/components/Common/Input/CancelAbleInput';
import AuthTemplate from '@/components/Modules/Auth/AuthTemplate';
import Flex from '@/components/Common/Layout/Flex';
import Button from '@/components/Common/Button';

const SignIn = (): JSX.Element => {
  const { color, fontSize } = useTheme();

  return (
    <AuthTemplate>
      <Flex
        flexDirection='column'
        gap='1.75rem'
      >
        <SignInInput
          type='text'
          name='id'
          placeholder='아이디를 입력하세요'
        />

        <SignInInput
          type='password'
          name='password'
          placeholder='비밀번호를 입력하세요'
        />

        <Button
          width='100%'
          height='40px'
          fontSize={fontSize.NORMAL}
          color={color.white}
          backgroundColor={color.main}
          onClick={() => {}}
        >
          로그인
        </Button>

        <NoAccount>아이디가 없으신가요?</NoAccount>
      </Flex>
    </AuthTemplate>
  );
}

const SignInInput = styled(CancelAbleInput)`
  width: 100%;
  padding: 0.75rem;
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.NORMAL};
`;

const NoAccount = styled.p`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  cursor: pointer;
`;

export default SignIn;