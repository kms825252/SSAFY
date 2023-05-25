import * as styled from 'styled-components';
import { css, keyframes } from 'styled-components';
import PRETENDARD_WOFF2 from '@/assets/fonts/PretendardVariable.woff2';

export const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: 'Pretendard Variable';
    src: local('Pretendard Variable') url('${PRETENDARD_WOFF2}') format('woff2-variants');
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
  }

  body {
    overflow-y: scroll;
  }

  body::-webkit-scrollbar {
    width: 3px;
    height: 3px;
  }

  body::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #3b82f6; /* 스크롤바의 색상 */

    border-radius: 10px;
  }

  body::-webkit-scrollbar-track {
    background-color: #d6e4fb;
  }
`;

export const huduldul = keyframes`
  0% {
    transform: translateX(-5px);
  }
  20% {
    transform: translateX(5px);
  }
  40% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0px);
  }
`;

export const slideDown = keyframes`
  0%,
  100% {
  -webkit-transform: translateY(-100px);
}
  10%,
  90% {
  -webkit-transform: translateY(0px);
}
`;

export const fadeOut = keyframes`
  88% {
    opacity: 1;
  }
  95% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.1;
  }
`;

export const invalidInputAnimation = ({
  isAnimationActive,
}: {
  isAnimationActive?: boolean;
}) => css`
  animation: ${isAnimationActive ? huduldul : null} 0.3s;
`;
