import { ReactNode } from 'react';
import { icons } from '@/assets/icons';
import { images } from '@/assets/images';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import Image from '@/components/Common/Image';
import Flex from '@/components/Common/Flex';
import Section from '@/components/Common/Section';
import Text from '@/components/Common/Text';
import styled from 'styled-components';
import HyperLink from '@/components/Common/HyperLink';
import { pageRoute } from '@/libs/models/route';

type AuthTemplateProps = {
  type: 'sign-in' | 'sign-up';
  children: ReactNode;
}

const AuthTemplate = ({
  type,
  children,
}: AuthTemplateProps): JSX.Element => {
  const {
    color,
    fontSize,
    fontFamily,
  } = useStyledTheme();

  return (
    <Flex
      tagName='main'
      width='100%'
      minHeight='100vh'
      justifyContent='center'
      alignItems='center'
      backgroundColor={color.main}
    >
      <Section
        tagName='section'
        width='100%'
        maxWidth='1100px'
        maxHeight='100%'
        margin='3rem'
      >
        <Flex
          tagName='div'
          alignItems='stretch'
        >
          <LeftPanelWrapper
            tagName='a'
            flex='1'
            padding='5rem'
            borderRadius='5px 0 0 5px'
            backgroundColor={color.main200}
          >
            <Image
              src={images.auth.AUTH_PANEL}
              alt='FileUp'
              width='100%'
              height='100%'
            />
          </LeftPanelWrapper>

          <RightPanelWrapper
            tagName='div'
            flex='1'
            flexDirection='column'
            alignItems='center'
            padding='5rem'
            borderRadius='0 5px 5px 0'
            backgroundColor={color.theme}
          >
            <Flex
              tagName='div'
              width='100%'
              justifyContent='flex-end'
              margin='0 0 2rem 0'
            >
              <Text
                tagName='span'
                fontSize={fontSize.MEDIUM}
                fontFamily={fontFamily.pretendard.BOLD}
                color={color.main}
              >
                {
                  type === 'sign-in' ? '로그인' : '회원가입'
                }
              </Text>
            </Flex>

            <Flex
              tagName='div'
              width='100%'
              gap='3rem'
              flexDirection='column'
              alignItems='center'
            >
              <Image
                src={icons.logo.SVG_LOGO}
                alt='FileUp'
                width='70px'
              />
              
              <Text
                tagName='p'
                textAlign='center'
                lineHeight='1.5'
                wordBreak='keep-all'
                fontSize={fontSize.NORMAL}
                fontFamily={fontFamily.pretendard.MEDIUM}
              >
                {
                  type === 'sign-in' ?
                  <>
                    File UP을 이용하시려면 로그인이 필요합니다.<br />
                    로그인을 먼저 진행해주세요.
                  </>
                  :
                  <>
                    File UP에 오신 것을 환영합니다.<br />
                    회원가입을 진행해주세요.
                  </>
                }
              </Text>

              <Section
                tagName='div'
                width='100%'
              >
                {children}
              </Section>

              <Flex
                tagName='div'
                gap='1rem'
              >
                <Text
                  tagName='p'
                  fontSize={fontSize.NORMAL}
                  fontFamily={fontFamily.pretendard.MEDIUM}
                >
                  {
                    type === 'sign-in' ?
                    'FileUp이 처음이신가요?'
                    :
                    '이미 계정이 있으신가요?'
                  }
                </Text>

                <HyperLink
                  external={false}
                  link={{
                    href: type === 'sign-in' ? pageRoute.auth.SIGN_UP : pageRoute.auth.SIGN_IN,
                  }}
                  fontSize={fontSize.NORMAL}
                  fontFamily={fontFamily.pretendard.MEDIUM}
                  color={color.main}
                >
                  {
                    type === 'sign-in' ? '회원가입' : '로그인'
                  }
                </HyperLink>
              </Flex>
            </Flex>
          </RightPanelWrapper>
        </Flex>
      </Section>
    </Flex>
  );
}

const LeftPanelWrapper = styled(Section)`
  ${({ theme }) => theme.device.tablet} {
    display: none;
  };
`;

const RightPanelWrapper = styled(Flex)`
  ${({ theme }) => theme.device.tablet} {
    border-radius: 5px;
    padding: 3rem;
  };
`;

export default AuthTemplate;