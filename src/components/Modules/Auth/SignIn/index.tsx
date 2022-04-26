import { useRouter } from 'next/router';
import AuthTemplate from '@/components/Modules/Auth/AuthTemplate';
import {
  FormWrapper,
  AuthInput,
  AuthButton,
  AccountText,
} from '@/components/Modules/Auth/style';

const SignIn = (): JSX.Element => {
  const { push } = useRouter();

  return (
    <AuthTemplate>
      <FormWrapper>
        <AuthInput
          type='text'
          name='id'
          placeholder='아이디를 입력하세요'
        />

        <AuthInput
          type='password'
          name='password'
          placeholder='비밀번호를 입력하세요'
        />

        <AuthButton
          width='100%'
          height='40px'
          onClick={() => {}}
        >
          로그인
        </AuthButton>

        <AccountText
          onClick={() => push({
            pathname: '/sign-up',
          })}
        >
          아이디가 없으신가요?
        </AccountText>
      </FormWrapper>
    </AuthTemplate>
  );
}

export default SignIn;