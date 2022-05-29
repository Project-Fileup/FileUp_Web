import { useCallback, useState } from 'react';
import { sha512 } from 'js-sha512';
import useObjectInput from '@/hooks/common/useObjectInput';
import { SignInDto } from '@/types/dto/auth.dto';
import authRepository from '@/repositories/auth/auth.repository';
import axios from 'axios';
import constants from '@/constants';
import cookie from '@/libs/cookie';

const { token, request } = constants;

const useSignIn = () => {
  const [signInLoading, setSignInLoading] = useState<boolean>(false);
  const [signInRequest, changeSignInRequest] = useObjectInput<SignInDto>({
    email: '',
    password: '',
  });

  const requestSignIn = useCallback(async (): Promise<void> => {
    try {
      setSignInLoading(true);

      const {
        data: {
          accessToken,
          refreshToken,
        },
      } = await authRepository.signIn({
        ...signInRequest,
        password: sha512(signInRequest.password),
      });

      cookie.set(token.ACCESS_TOKEN_KEY, accessToken);
      cookie.set(token.REFRESH_TOKEN_KEY, refreshToken);

      axios.defaults.headers.common[request.AUTHORIZATION] = `Bearer ${accessToken}`;

      setSignInLoading(false);
    } catch (error) {
      console.log(error);

      setSignInLoading(false);
    }
  }, [signInRequest]);

  return {
    signInLoading,
    signInRequest,
    changeSignInRequest,
    requestSignIn,
  };
}

export default useSignIn;