import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { sha512 } from 'js-sha512';
import useObjectInput from '@/hooks/common/useObjectInput';
import useCounter from '@/hooks/common/useCounter';
import authRepository from '@/repositories/auth/auth.repository';
import { SignUpDto } from '@/types/dto/auth.dto';

const useSignUp = () => {
  const { push } = useRouter();

  const [
    page,
    handlePrevPage,
    handleNextPage,
  ] = useCounter(0);

  const [signUpRequest, changeSignUpRequest] = useObjectInput<SignUpDto>({
    authCode: '',
    email: '',
    password: '',
    rePassword: '',
  });

  const requestEmailCode = useCallback(async (passPage: boolean): Promise<void> => {
    try {
      await authRepository.sendEmailCode({
        email: signUpRequest.email,
      });

      if (passPage) {
        handleNextPage();
      }
    } catch (error) {
      console.log(error);
    }
  }, [handleNextPage, signUpRequest]);

  const requestSignUp = useCallback(async (): Promise<void> => {
    try {
      delete signUpRequest.rePassword;

      await authRepository.signUp({
        ...signUpRequest,
        password: sha512(signUpRequest.password),
      });

      push({
        pathname: '/sign-in',
      });
    } catch (error) {
      console.log(error);
    }
  }, [signUpRequest, push]);

  return {
    page,
    handlePrevPage,
    signUpRequest,
    changeSignUpRequest,
    requestEmailCode,
    requestSignUp,
  };
}

export default useSignUp;