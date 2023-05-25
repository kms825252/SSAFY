import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000;
  background-color: ${({ theme: { colors } }) => colors.white};
  opacity: 0.93;
  backdrop-filter: blur(30px);
`;
