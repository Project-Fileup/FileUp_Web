import { NextPage } from 'next';
import AuthTemplate from '@/components/Modules/Auth/AuthTemplate';
import SocialPlatforms from '@/components/Modules/Auth/SocialPlatforms';
import Helmet from '@/components/Common/Helmet';

const SignInPage: NextPage = () => {
  return (
    <>
      <Helmet
        title='로그인'
      />

      <AuthTemplate
        type='sign-in'
      >
        <SocialPlatforms
          type='sign-in'
        />
      </AuthTemplate>
    </>
  );
}

export default SignInPage;