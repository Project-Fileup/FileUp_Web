export type EmailCodeDto = {
  email: string;
}

export type SignUpDto = EmailCodeDto & {
  authCode: string;
  password: string;
  rePassword?: string;
}