import { NextPage } from 'next';
import SignIn from '@/components/Modules/Auth/SignIn';
import Helmet from '@/components/Common/Helmet';

const SignInPage: NextPage = () => {
  return (
    <>
      <Helmet
        title='로그인 | FileUp'
      />

      <SignIn />
    </>
  );
}

export default SignInPage;