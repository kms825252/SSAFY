import React from 'react';
import ReactDOM from 'react-dom';
import * as Styled from './index.styles';

export interface ModalProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  flexDirection?: string;
  isModalOpen: boolean;
  handleClose: () => void;
}
const Modal = ({ children, width, height, isModalOpen, handleClose, ...rest }: ModalProps) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isModalOpen && (
        <>
          {ReactDOM.createPortal(
            <Styled.Backdrop onClick={handleClose} />,
            document.getElementById('backdrop-root') as HTMLElement
          )}
          {ReactDOM.createPortal(
            <Styled.Overlay width={width} height={height} {...rest}>
              {children}
            </Styled.Overlay>,
            document.getElementById('overlay-root') as HTMLElement
          )}
        </>
      )}
    </>
  );
};

export default Modal;
