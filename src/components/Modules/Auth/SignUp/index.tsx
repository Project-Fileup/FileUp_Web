import Link from 'next/link';
import { useTheme } from 'styled-components';
import AuthTemplate from '@/components/Modules/Auth/AuthTemplate';
import Flex from '@/components/Common/Layout/Flex';
import {
  FormWrapper,
  AuthInput,
  AuthButton,
  AccountText,
} from '@/components/Modules/Auth/style';

const SignUp = (): JSX.Element => {
  const { color } = useTheme();

  return (
    <AuthTemplate>
      <FormWrapper>
        <AuthInput
          type='email'
          name='email'
          placeholder='이메일을 입력하세요'
        />

        <AuthInput
          type='password'
          name='password'
          placeholder='비밀번호를 입력하세요'
        />

        <AuthInput
          type='password'
          name='password'
          placeholder='비밀번호를 재입력하세요'
        />

        <Flex
          width='100%'
          justifyContent='space-between'
        >
          <AuthButton
            height='40px'
            onClick={() => {}}
          >
            이전
          </AuthButton>

          <AuthButton
            height='40px'
            onClick={() => {}}
          >
            다음
          </AuthButton>
        </Flex>

        <Flex
          width='100%'
          gap='1.5rem'
          justifyContent='center'
        >
          <AccountText>FileUp 계정이 있으신가요?</AccountText>

          <Link
            href={{
              pathname: '/sign-in',
            }}
            passHref
            shallow
          >
            <a>
              <AccountText
                color={color.main}
              >
                로그인
              </AccountText>
            </a>
          </Link>
        </Flex>
      </FormWrapper>
    </AuthTemplate>
  );
}

export default SignUp;