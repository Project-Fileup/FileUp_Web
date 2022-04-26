import { ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';
import isServer from '@/utils/is-package/isServer';

type ModalPortalProps = {
  children: ReactNode;
}

const ModalPortal = ({
  children,
}: ModalPortalProps): ReactPortal | null => {
  const externalModalElement = isServer() ? null : document.getElementById('modal-portal');

  if (externalModalElement === null) {
    return null;
  }

  return createPortal(children, externalModalElement);
}

export default ModalPortal;