import { AxiosResponse } from 'axios';
import { cacheAxios } from '@/libs/fetcher';
import { EmailCodeDto, SignUpDto } from '@/types/dto/auth.dto';

const authRepository = {
  sendEmailCode: async (emailCodeDto: EmailCodeDto): Promise<AxiosResponse> => {
    return cacheAxios.post<AxiosResponse>('/auth/generate-code', emailCodeDto);
  },

  signUp: async (signUpDto: SignUpDto): Promise<AxiosResponse> => {
    return cacheAxios.post<AxiosResponse>('/auth/sign-up', signUpDto);
  },
};

export default authRepository;