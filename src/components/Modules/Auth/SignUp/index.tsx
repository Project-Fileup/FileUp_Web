import { useRouter } from 'next/router';
import AuthTemplate from '@/components/Modules/Auth/AuthTemplate';
import Flex from '@/components/Common/Layout/Flex';
import {
  FormWrapper,
  AuthInput,
  AuthButton,
  AccountText,
} from '@/components/Modules/Auth/style';

const SignUp = (): JSX.Element => {
  const { push } = useRouter();

  return (
    <AuthTemplate>
      <FormWrapper>
        <AuthInput
          type='text'
          name='name'
          placeholder='이름을 입력하세요'
        />

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
          alignItems='stretch'
          gap='1rem'
        >
          <AuthInput
            type='text'
            placeholder='이메일 인증코드'
          />

          <AuthButton
            height='auto'
            onClick={() => {}}
          >
            인증
          </AuthButton>
        </Flex>

        <AuthButton
          width='100%'
          height='40px'
          onClick={() => {}}
        >
          회원가입
        </AuthButton>

        <AccountText
          onClick={() => push({
            pathname: '/sign-in',
          })}
        >
          계정이 있으신가요?
        </AccountText>
      </FormWrapper>
    </AuthTemplate>
  );
}

export default SignUp;