import { NextPage } from 'next';
import SignUp from '@/components/Modules/Auth/SignUp';
import Helmet from '@/components/Common/Helmet';

const SignUpPage: NextPage = () => {
  return (
    <>
      <Helmet
        title='회원가입 | FileUp'
      />

      <SignUp />
    </>
  );
}

export default SignUpPage;