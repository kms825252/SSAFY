import styled from 'styled-components';

export const Logo = styled.div`
  display: flex;
  width: 10rem;
  height: ${({ theme: { ui } }) => ui.toolbarHeight};
  justify-content: center;
  align-items: center;

  & > a {
    padding-left: 2rem;
  }
`;

export const Nav = styled.nav`
  padding: 0 2.25rem 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme: { ui } }) => ui.toolbarHeight};
  box-shadow: ${({ theme: { shadows } }) => shadows.basic};
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
