import PATH from '@/constants/paths';
import * as Styled from './NavMenu.styles';

const NavList = [
  {
    link: `/${PATH.PLAN}`,
    title: '일정생성',
    className: 'plan',
  },
  {
    link: `/${PATH.PLAN_REPOSITORY}`,
    title: '일정 저장소',
    className: 'plan-repo',
  },
  {
    link: `/${PATH.TRIP_RECORD}`,
    title: '여행 기록',
    className: 'trip-record',
  },
  {
    link: `/${PATH.DESTINATIONS}`,
    title: '여행지 탐색',
    className: 'destinations',
  },
];

const NavMenu = () => {
  return (
    <Styled.Ul>
      {/* eslint-disable-next-line array-callback-return,consistent-return */}
      {NavList.map((item) => {
        return (
          <li key={item.title}>
            <Styled.NavItem to={item.link}>{item.title}</Styled.NavItem>
          </li>
        );
      })}
    </Styled.Ul>
  );
};

export default NavMenu;
