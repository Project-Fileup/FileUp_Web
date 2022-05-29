import { AxiosResponse } from 'axios';
import { cacheAxios } from '@/libs/fetcher';
import {
  EmailCodeDto,
  SignInDto,
  SignUpDto,
} from '@/types/dto/auth.dto';
import { AuthResponse } from '@/types/domain/auth';

const authRepository = {
  sendEmailCode: async (emailCodeDto: EmailCodeDto): Promise<AxiosResponse> => {
    return cacheAxios.post<AxiosResponse>('/auth/generate-code', emailCodeDto);
  },

  signUp: async (signUpDto: SignUpDto): Promise<AxiosResponse> => {
    return cacheAxios.post<AxiosResponse>('/auth/sign-up', signUpDto);
  },

  signIn: async (signInDto: SignInDto): Promise<AuthResponse> => {
    const { data } = await cacheAxios.post('/auth/sign-in', signInDto);

    return data;
  },
};

export default authRepository;