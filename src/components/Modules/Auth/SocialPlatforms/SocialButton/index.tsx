import styled from 'styled-components';
import Button from '@/components/Common/Button';
import Image from '@/components/Common/Image';
import Text from '@/components/Common/Text';
import useStyledTheme from '@/hooks/theme/useStyledTheme';

type SocialButtonProps = {
  icon: string;
  text: string;
  color: string;
  backgroundColor: string;
}

const SocialButton = ({
  icon,
  text,
  color,
  backgroundColor,
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