import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import useStyledTheme from '@/hooks/theme/useStyledTheme';
import Button from '@/components/Common/Button';
import Image from '@/components/Common/Image';
import Text from '@/components/Common/Text';

type SocialButtonProps = {
  icon: string;
  text: string;
  color: string;
  backgroundColor: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const SocialButton = ({
  icon,
  text,
  color,
  backgroundColor,
  onClick,
}: SocialButtonProps) => {
  const {
    fontSize,
    fontFamily,
  } = useStyledTheme();

  return (
    <Button
      width='100%'
      maxWidth='500px'
      margin='0 auto'
      height='44px'
      color={color}
      backgroundColor={backgroundColor}
      padding='0 2rem'
      position='relative'
      justifyContent='flex-start'
      isLoading={false}
      onClick={onClick}
    >
      <Image
        src={icon}
        alt={text}
        width='20px'
        height='20px'
      />

      <SocialText
        tagName='p'
        fontSize={fontSize.SMALL}
        fontFamily={fontFamily.pretendard.MEDIUM}
      >
        {text}
      </SocialText>
    </Button>
  );
}

const SocialText = styled(Text)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default SocialButton;