import { ChangeEvent } from 'react';
import { SignUpDto } from '@/types/dto/auth.dto';
import Flex from '@/components/Common/Layout/Flex';
import AuthTemplate from '@/components/Modules/Auth/AuthTemplate';
import {
  FormWrapper,
  AuthInput,
  AuthButton,
  SpaceLabel,
} from '@/components/Modules/Auth/style';

type EnterInfoProps = {
  signUpRequest: SignUpDto;
  changeSignUpRequest: (e: ChangeEvent<HTMLInputElement>) => void;
  requestEmailCode: (passPage: boolean) => Promise<void>;
  emailLoading: boolean;
}

const EnterInfo = ({
  signUpRequest,
  changeSignUpRequest,
  requestEmailCode,
  emailLoading,
}: EnterInfoProps): JSX.Element => {
  return (
    <AuthTemplate>
      <FormWrapper>
        <AuthInput
          type='email'
          name='email'
          value={signUpRequest.email}
          onChange={changeSignUpRequest}
          onEnter={() => requestEmailCode(true)}
          placeholder='이메일을 입력하세요'
        />

        <AuthInput
          type='password'
          name='password'
          value={signUpRequest.password}
          onChange={changeSignUpRequest}
          onEnter={() => requestEmailCode(true)}
          placeholder='비밀번호를 입력하세요'
        />

        <AuthInput
          type='password'
          name='rePassword'
          value={signUpRequest.rePassword}
          onChange={changeSignUpRequest}
          onEnter={() => requestEmailCode(true)}
          placeholder='비밀번호를 재입력하세요'
        />

        <Flex
          width='100%'
          justifyContent='flex-end'
        >
          <AuthButton
            height='40px'
            onClick={() => requestEmailCode(true)}
            isLoading={emailLoading}
          >
            다음
          </AuthButton>
        </Flex>

        <SpaceLabel
          commonText='FileUp 계정이 있으신가요?'
          accentText='로그인'
          link='/sign-in'
        />
      </FormWrapper>
    </AuthTemplate>
  )
}

export default EnterInfo;