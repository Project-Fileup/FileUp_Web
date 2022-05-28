import Image from 'next/image';
import styled from 'styled-components';
import AuthTemplate from '@/components/Modules/Auth/AuthTemplate';
import {
  FormWrapper,
  AuthInput,
  AuthButton,
  SpaceLabel,
} from '@/components/Modules/Auth/style';
import Flex from '@/components/Common/Layout/Flex';
import { icons } from '@/assets/icons';

const SignIn = (): JSX.Element => {
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

        <SpaceLabel
          commonText='FileUp이 처음이신가요?'
          accentText='회원가입'
          link='/sign-up'
        />

        <Flex
          width='100%'
          gap='1rem'
          justifyContent='space-between'
        >
          <TitleSideBorder></TitleSideBorder>
          <SocialLoginTitle>소셜 로그인</SocialLoginTitle>
          <TitleSideBorder></TitleSideBorder>
        </Flex>

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
      </FormWrapper>
    </AuthTemplate>
  );
}

const TitleSideBorder = styled.hr`
  flex: 1;
  height: 3px;
  background-color: ${({ theme }) => theme.color.black};
`;

const SocialLoginTitle = styled.h3`
  text-align: center;
  font-family: ${({ theme }) => theme.font.pretendard.medium};
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