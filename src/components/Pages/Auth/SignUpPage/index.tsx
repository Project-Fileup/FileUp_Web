import { NextPage } from 'next';
import AuthTemplate from '@/components/Modules/Auth/AuthTemplate';
import SocialPlatforms from '@/components/Modules/Auth/SocialPlatforms';
import Helmet from '@/components/Common/Helmet';

const SignUpPage: NextPage = () => {
  return (
    <>
      <Helmet
        title='회원가입'
      />

      <AuthTemplate
        type='sign-up'
      >
        <SocialPlatforms
          type='sign-up'
        />
      </AuthTemplate>
    </>
  );
}

export default SignUpPage;