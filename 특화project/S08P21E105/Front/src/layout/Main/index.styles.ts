import styled from 'styled-components';

const Main = styled.main`
  min-height: 300vh;
  background-color: ${({ theme: { colors } }) => colors.back};
`;

export default Main;
