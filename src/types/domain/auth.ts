import { Response } from '@/types/base/response';

export type AuthResponse = Response<{
  accessToken: string;
  refreshToken: string;
}>