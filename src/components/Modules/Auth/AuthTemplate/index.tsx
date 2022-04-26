import { ReactNode } from 'react';
import Image from 'next/image';
import { icons } from '@/assets/icons';
import Flex from '@/components/Common/Layout/Flex';
import MaxWidth from '@/components/Common/Layout/MaxWidth';

type AuthTemplateProps = {
  children: ReactNode;
}

// TODO: 배경 이미지 추가
const AuthTemplate = ({
  children,
}: AuthTemplateProps): JSX.Element => {
  return (
    <Flex
      height='100%'
      justifyContent='center'
      flexDirection='column'
    >
      <MaxWidth
        maxWidth='400px'
      >
        <Flex
          justifyContent='center'
          margin='0 0 2rem 0'
        >
          <Image
            width='125px'
            height='125px'
            src={icons.logo.SVG_LOGO}
            alt='FileUp'
          />
        </Flex>

        {children}
      </MaxWidth>
    </Flex>
  );
}

export default AuthTemplate;