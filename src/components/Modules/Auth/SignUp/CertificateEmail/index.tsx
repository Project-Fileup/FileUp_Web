import { ChangeEvent } from 'react';
import styled from 'styled-components';
import { SignUpDto } from '@/types/dto/auth.dto';
import AuthTemplate from '@/components/Modules/Auth/AuthTemplate';
import { AuthButton, AuthInput, SpaceLabel } from '@/components/Modules/Auth/style';
import Flex from '@/components/Common/Layout/Flex';

type CertificateEmailProps = {
  handlePrevPage: () => void;
  signUpRequest: SignUpDto;
  changeSignUpRequest: (e: ChangeEvent<HTMLInputElement>) => void;
  requestEmailCode: (passPage: boolean) => void;
  requestSignUp: () => Promise<void>;
}

const CertificateEmail = ({
  signUpRequest,
  changeSignUpRequest,
  handlePrevPage,
  requestEmailCode,
  requestSignUp,
}: CertificateEmailProps): JSX.Element => {
  return (
    <AuthTemplate>
      <Flex
        gap='1.5rem'
        flexDirection='column'
        margin='0 0 6rem 0'
      >
        <GuideText>
          yiyb0603@gmail.com{'(으)'}로 보내드린 인증 메일을 확인해주세요.
        </GuideText>

        <AuthInput
          type='text'
          name='authCode'
          value={signUpRequest.authCode}
          onChange={changeSignUpRequest}
          placeholder='인증코드 입력'
        />

        <AuthButton
          width='100%'
          height='40px'
          onClick={() => {}}
        >
          인증
        </AuthButton>

        <SpaceLabel
          commonText='인증 메일을 못 받으셨나요?'
          accentText='다시 받기'
          link=''
          onClick={() => requestEmailCode(false)}
        />
      </Flex>

      <Flex
        width='100%'
        gap='2rem'
        justifyContent='space-between'
        margin='0 0 1.5rem 0'
      >
        <AuthButton
          width='150px'
          height='40px'
          onClick={handlePrevPage}
        >
          이전
        </AuthButton>

        <AuthButton
          width='150px'
          height='40px'
          onClick={requestSignUp}
        >
          다음
        </AuthButton>
      </Flex>

      <SpaceLabel
        commonText='FileUp의 회원이신가요?'
        accentText='로그인'
        link='/sign-in'
      />
    </AuthTemplate>
  );
}

const GuideText = styled.p`
  text-align: center;
  line-height: 2rem;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  letter-spacing: -0.02rem;
`;

export default CertificateEmail;