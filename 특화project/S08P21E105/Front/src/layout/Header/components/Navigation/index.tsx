import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './index.styles';
import NavMenu from '@/layout/Header/components/NavMenu/NavMenu';
import MemberNavMenu from '@/layout/Header/components/NavMenu/MemberNavMenu';
import GuestNavMenu from '@/layout/Header/components/NavMenu/GuestNavMenu';

const Navigation = () => {
  // const isLoggedIn = useRecoilValue(userState);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Styled.Nav>
      <Styled.NavWrapper>
        <Link to="/">
          <Styled.Logo>로고</Styled.Logo>
        </Link>
        <NavMenu />
      </Styled.NavWrapper>
      {isLoggedIn && (
        <Styled.NavWrapper>
          <MemberNavMenu />
        </Styled.NavWrapper>
      )}
      {isLoggedIn || (
        <Styled.NavWrapper>
          <GuestNavMenu />
        </Styled.NavWrapper>
      )}
    </Styled.Nav>
  );
};

export default Navigation;
