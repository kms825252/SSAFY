import React from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './index.styles';
import Navigation from '@/layout/Header/components/Navigation';
import PATH from '@/constants/paths';

const Header = () => {
  const { pathname } = useLocation();

  if (pathname.substring(1) === PATH.SIGN_IN || pathname.substring(1) === PATH.SIGN_UP) return null;

  return (
    <Styled.Header>
      <Navigation />
    </Styled.Header>
  );
};

export default Header;
