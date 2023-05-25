import styled from 'styled-components';
import { fadeOut, slideDown } from '@/styles/global-styles';
import { TOAST_TIMEOUT } from '@/constants';

export const ToastWrapper = styled.div`
  padding: 10px 16px;
  background-color: ${({ theme: { colors } }) => colors.back};
  color: ${({ theme: { colors } }) => colors.dim_800};
  top: 4rem;
  min-width: 5rem;
  left: 50%;
  translate: -50%;
  z-index: 10001;
  pointer-events: all;
  position: fixed;
  border-radius: 4px;
  animation: ${slideDown} ${TOAST_TIMEOUT}ms forwards, ${fadeOut} ${TOAST_TIMEOUT}ms ease-out;
`;
