import styled from 'styled-components';
import Card from '../Card';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 50%;
  z-index: 9999;
`;

export const Overlay = styled(Card)<{
  flexDirection?: string;
  width?: string;
  height?: string;
}>`
  position: fixed;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: ${({ width }) => width || '50%'};
  height: ${({ height }) => height || '50%'};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  flex: 1;
  align-self: flex-start;
`;

export const ModalBody = styled.div`
  flex: 1;
  align-self: flex-start;
`;

export const ModalFooter = styled.div`
  flex: 1;
  align-self: flex-end;
`;
