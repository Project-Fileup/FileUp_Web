import { ReactNode } from 'react';
import Image from 'next/image';
import { icons } from '@/assets/icons';
import Flex from '@/components/Common/Layout/Flex';
import MaxWidth from '@/components/Common/Layout/MaxWidth';

type AuthTemplateProps = {
  children: ReactNode;
}

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
            width='150px'
            height='150px'
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