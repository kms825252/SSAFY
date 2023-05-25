import React from 'react';
import { useLocation } from 'react-router-dom';
import PATH from '@/constants/paths';

const Footer = () => {
  const { pathname } = useLocation();
  if (pathname.substring(1) === PATH.SIGN_IN || pathname.substring(1) === PATH.SIGN_UP) return null;
  return <div />;
};

export default Footer;
