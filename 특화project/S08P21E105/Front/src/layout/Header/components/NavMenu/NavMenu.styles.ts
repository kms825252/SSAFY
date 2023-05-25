import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.dim_900};
  font-weight: 500;
  height: 100%;
  width: 80%;
  padding: 0.4rem;
  margin-left: 0.8rem;
  margin-right: 1rem;
  &:hover {
    color: ${({ theme: { colors } }) => colors.main_500};
    font-weight: 600;
  }
  &.active {
    color: ${({ theme: { colors } }) => colors.main_500};
    border-bottom: 2px ${({ theme: { colors } }) => colors.main_500} solid;
    font-weight: 600;
  }
`;

export const Ul = styled.ul`
  display: flex;
  height: 100%;
  margin-left: 1.5rem;
`;
