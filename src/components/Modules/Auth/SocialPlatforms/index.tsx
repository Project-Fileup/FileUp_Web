import { icons } from '@/assets/icons';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import { GOOGLE_LOGIN_URL } from '@/libs/models/oauth';
import Flex from '@/components/Common/Flex';
import SocialButton from './SocialButton';

type SocialPlatformsProps = {
  type: 'sign-in' | 'sign-up';
}

const SocialPlatforms = ({
  type,
}: SocialPlatformsProps) => {
  const {
    color,
  } = useStyledTheme();

  const pushOAuthLink = (link: string): void => {
    window.open(link);
  }

  return (
    <Flex
      tagName='div'
      gap='2rem'
      flexDirection='column'
    >
      <SocialButton
        icon={icons.auth.GOOGLE}
        text={type === 'sign-in' ? '구글 로그인' : '구글로 시작하기'}
        color={color.black}
        backgroundColor={color.google}
        onClick={() => pushOAuthLink(GOOGLE_LOGIN_URL)}
      />

      <SocialButton
        icon={icons.auth.APPLE}
        text={type === 'sign-in' ? '애플 로그인' : '애플로 시작하기'}
        color={color.white}
        backgroundColor={color.apple}
        onClick={() => pushOAuthLink(GOOGLE_LOGIN_URL)}
      />

      <SocialButton
        icon={icons.auth.KAKAOTALK}
        text={type === 'sign-in' ? '카카오 로그인' : '카카오로 시작하기'}
        color={color.black}
        backgroundColor={color.kakao}
        onClick={() => pushOAuthLink(GOOGLE_LOGIN_URL)}
      />

      <SocialButton
        icon={icons.auth.NAVER}
        text={type === 'sign-in' ? '네이버 로그인' : '네이버로 시작하기'}
        color={color.white}
        backgroundColor={color.naver}
        onClick={() => pushOAuthLink(GOOGLE_LOGIN_URL)}
      />
    </Flex>
  );
}

export default SocialPlatforms;