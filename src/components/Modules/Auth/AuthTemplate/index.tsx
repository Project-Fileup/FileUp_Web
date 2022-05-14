import { ReactNode } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { icons } from '@/assets/icons';
import { images } from '@/assets/images';
import { setMinMaxWidth } from '@/styles/libStyle';
import Flex from '@/components/Common/Layout/Flex';

type AuthTemplateProps = {
  children: ReactNode;
}

const AuthTemplate = ({
  children,
}: AuthTemplateProps): JSX.Element => {
  return (
    <AuthTemplatewrapper>
      <AuthFormWrapper>
        <Flex
          alignItems='stretch'
        >
          <PanelImageWrapper>
            <AuthPanelImage
              src={images.auth.AUTH_PANEL}
              alt='FileUp'
            />
          </PanelImageWrapper>

          <RightPanelWrapper>
            <Image
              width='125px'
              height='125px'
              src={icons.logo.SVG_LOGO}
              alt='FileUp'
            />

            <ChildrenWrapper>
              {children}
            </ChildrenWrapper>
          </RightPanelWrapper>
        </Flex>
      </AuthFormWrapper>
    </AuthTemplatewrapper>
  );
}

const AuthTemplatewrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.main};
`;

const AuthFormWrapper = styled.main`
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
`;

const PanelImageWrapper = styled(Flex)`
  ${setMinMaxWidth('50%', '50%')};
  justify-content: center;
  padding: 2rem;
  background-color: #9fb4d7;
  border-radius: 5px 0 0 5px;
`;

const AuthPanelImage = styled.img`
  width: 100%;
  height: 430px;
  transform: rotate(-5deg);
`;

const RightPanelWrapper = styled(Flex)`
  ${setMinMaxWidth('50%', '50%')};
  flex-direction: column;
  padding: 4rem 6rem;
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

export default AuthTemplate;