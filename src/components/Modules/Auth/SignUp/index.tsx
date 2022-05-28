import useSignUp from '@/hooks/auth/useSignUp';
import CertificateEmail from '../SignUp/CertificateEmail';
import EnterInfo from '../SignUp/EnterInfo';

const SignUp = (): JSX.Element => {
  const {
    page,
    handlePrevPage,
    signUpRequest,
    changeSignUpRequest,
    requestEmailCode,
    requestSignUp,
  } = useSignUp();

  switch (page) {
    case 0:
      return (
        <EnterInfo
          signUpRequest={signUpRequest}
          changeSignUpRequest={changeSignUpRequest}
          requestEmailCode={requestEmailCode}
        />
      );

    case 1:
      return (
        <CertificateEmail
          handlePrevPage={handlePrevPage}
          requestEmailCode={requestEmailCode}
          signUpRequest={signUpRequest}
          changeSignUpRequest={changeSignUpRequest}
          requestSignUp={requestSignUp}
        />
      );

    default:
      return <></>
  }
}

export default SignUp;