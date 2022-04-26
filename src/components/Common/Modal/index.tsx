import {
  useEffect,
  useCallback,
  MouseEvent,
  memo,
  ReactNode,
} from 'react';
import { CgClose } from 'react-icons/cg';
import styled from 'styled-components';
import { fontSize } from '@/styles/fontSize';
import Flex from '@/components/Common/Layout/Flex';
import ModalPortal from './ModalPortal';

type ModalStyleProps = {
  width: string;
  height?: string;
  padding?: string;
}

type ModalProps = ModalStyleProps & {
  isModal: boolean;
  handleModal: (e: MouseEvent) => void;
  title: string | JSX.Element;
  children: ReactNode;
}

const Modal = ({
  width,
  height = 'auto',
  padding = '3rem',
  isModal,
  handleModal,
  title,
  children,
}: ModalProps): JSX.Element => {
  const setBodyOverflow = useCallback((overflow: 'hidden' | 'unset'): void => {
    document.body.style.overflow = overflow;
  }, []);

  useEffect(() => {
    if (isModal) {
      setBodyOverflow('hidden');
    } else {
      setBodyOverflow('unset');
    }

    return () => setBodyOverflow('unset');
  }, [isModal, setBodyOverflow]);

  if (!isModal) {
    return <></>;
  }

  return (
    <ModalPortal>
      <ModalBackground onClick={handleModal}></ModalBackground>

      <ModalContent
        width={width}
        height={height}
        padding={padding}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalTitleWrapper>
          <ModalTitle>{title}</ModalTitle>

          <CgClose
            fontSize={fontSize.BIG}
            cursor='pointer'
            onClick={handleModal}
          />
        </ModalTitleWrapper>
        {children}
      </ModalContent>
    </ModalPortal>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
`;

const ModalTitleWrapper = styled(Flex)`
  justify-content: space-between;
  padding-bottom: 1rem;
`;

const ModalTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  letter-spacing: -0.4px;
`;

const ModalContent = styled.div<ModalStyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: white;
  border-radius: 5px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: ${({ padding }) => padding};
  z-index: 11;
`;

export default memo(Modal);