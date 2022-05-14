import Link from 'next/link';
import Image from 'next/image';
import styled, { useTheme } from 'styled-components';
import AuthTemplate from '@/components/Modules/Auth/AuthTemplate';
import {
  FormWrapper,
  AuthInput,
  AuthButton,
  AccountText,
} from '@/components/Modules/Auth/style';
import Flex from '@/components/Common/Layout/Flex';
import { icons } from '@/assets/icons';

const SignIn = (): JSX.Element => {
  const { color } = useTheme();

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

        <Flex
          gap='2rem'
        >
          <AccountText>FileUp이 처음이신가요?</AccountText>

          <Link
            href={{
              pathname: '/sign-up',
            }}
            passHref
            shallow
          >
            <a>
              <AccountText
                color={color.main}
              >
                회원가입
              </AccountText>
            </a>
          </Link>
        </Flex>

        <div>
          <SocialLoginTitle>소셜 로그인</SocialLoginTitle>

          <Flex
            gap='2rem'
          >
            <AuthIcon
              src={icons.auth.GOOGLE}
              alt='구글 로그인'
            />

            <AuthIcon
              src={icons.auth.FACEBOOK}
              alt='페이스북 로그인'
            />
            
            <AuthIcon
              src={icons.auth.KAKAOTALK}
              alt='카카오톡 로그인'
            />
          </Flex>
        </div>
      </FormWrapper>
    </AuthTemplate>
  );
}

const SocialLoginTitle = styled.h3`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
`;

const AuthIcon = styled(Image).attrs({
  width: '50px',
  height: '50px',
  objectFit: 'cover',
})`
  cursor: pointer;
`;

export default SignIn;