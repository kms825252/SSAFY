import { useTheme } from 'styled-components';
import * as Styled from './index.styles';
import Button from '@/common/Button';
import { Paragraph } from '@/common/Typography';

const SignInPage = () => {
  const theme = useTheme();

  return (
    <Styled.Session>
      <Styled.ContentBox>
        <Styled.Title>로그인</Styled.Title>
        <Paragraph sizeType="xm" color={theme.colors.dim_700}>
          AI 여행 스케쥴링 플래너
        </Paragraph>
        <Styled.LoginContainer>
          <Styled.InputName>이메일 주소</Styled.InputName>
          <Styled.Input placeholder="이메일 주소" />
          <Styled.InputName>비밀번호</Styled.InputName>
          <Styled.Input type="password" placeholder="비밀번호" />
          <Button color="main_500" sizeType="large" fullWidth>
            로그인
          </Button>
        </Styled.LoginContainer>
        <Styled.Container>
          <Paragraph sizeType="xm" color={theme.colors.dim_300}>
            비밀번호 찾기
          </Paragraph>
          <Paragraph sizeType="xm" color={theme.colors.dim_300}>
            |
          </Paragraph>
          <Paragraph sizeType="xm" color={theme.colors.dim_300}>
            회원가입
          </Paragraph>
        </Styled.Container>
        <Paragraph sizeType="sm" color={theme.colors.dim_600}>
          간편 로그인
        </Paragraph>
        <Styled.OtherLoginContainer>
          <Styled.OtherLogin />
          <Styled.OtherLogin />
          <Styled.OtherLogin />
          <Styled.OtherLogin />
        </Styled.OtherLoginContainer>
      </Styled.ContentBox>
    </Styled.Session>
  );
};

export default SignInPage;
