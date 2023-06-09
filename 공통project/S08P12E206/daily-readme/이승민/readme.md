# 1주차_readme

# 0109

### 아이디어 회의
- 비대면 인생네컷
    - 조도와 원근감, 현장감 구현이 어려워 아이디어 피벗

- 교육 관리 플랫폼
    - 규모별 기능 등 상세히 명세 필요


### 교육 관리 플랫폼 채택
- 소규모

    - 개인 상담
        - 달력모양에서 일정선택 -> 시간이 되면 선생님이 호스트로 미팅 생성 -> 학부모가 접속 -> 미팅 완료, 상담 -> (필요하면)후기작성 -> 종료

    - 원생 정보 관리
        - 출결
        - 수업과정
        - 권한별로 전체 원생 정보 조회

        - 원장 : 전체 원생 C R U D
        - 선생 : R (반 별 우선 조회, 전체보기)
        - 학부모 : R (본인자녀만)


# 0110

### 세부 기능 회의
- 페르소나 별 세부 기능 도출
    - 상담 및 전체 시스템 이용시 페르소나 별 권한 설정
    - 스토리보드
    - 학생 - 강사 - 반 - 성적 등등 여러 항목별 관계 도출


### 요구사항 명세서 작성
- 기능 대분류 및 대상 분류 설정
    - 세부기능 작성


### 피그마 활용
- 첫 랜딩 페이지 피그마 작성



# 0111

### 기능 정의 회의
- 기능 대분류 및 세부 기능 정의
    - 회원관리
        - 회원가입
        - 회원가입 조회/수정/탈퇴
        - 로그인/로그아웃
        - ID/PW 찾기
        - 강사 등록/취소
        - 원생 등록/취소

    - 반 관리
        - 반 페이지 등록/관리

    - 원생 관리
        - 출결 등록
        - 원생 포트폴리오 등록/수정/조회

    - 상담
        - 상담 신청/내역/시간설정
        - 미팅방 설정/입장/화면/종료

### 요구사항 명세 작성
- 세부기능의 상세 동작 및 기능 작성


### 피그마 활용
- 로그인 페이지 작성함.



# 0112

### 요구사항 명세 작성
- 기존 요구사항 명세에 시스템 관리자 역할 및 강사 스케쥴러 기능 추가
- 각 기능별 스토리보드에 따른 명세 추가


### 피그마 활용
- 랜딩 페이지에서 연결된 기능 및 문의 페이지
- 로그인 페이지에서 연결된 아이디/비밀번호 찾기 페이지
- 회의 결과 메인페이지 기능 구현


### 추가 기능 회의
- 로딩 스피너, 공통 기능 회의



# 0113

### 기능 명세 작성
    - 학원관리 기능 및 포트폴리오 관련 내용 추가


### 간트차트 작성
    - 페이지 별 스토리 토의
    - 기능 명세별 우선 순위 분류
    

### 기획서 피드백
    - 포트폴리오에 관한 기능 명세 부실
    - 상담 내역 평가
    - 모바일 반응형 웹 고려



# 2주차_readme

# 0116

### 피그마 작성
    - 메인 테마 컬러 설정
    - UI 구성 회의
    - 강사용 메인페이지 일부 작성
    - 회의 후 추가 필요 페이지 설정


### 시퀀스 다이어그램 작성
    - 스토리 보드를 따라 시퀀스 다이어그램 작성


# 0117

### 시스템 UI 및 유저 스토리보드 구성
    - 강사 메인페이지 구성
    - 진도관리, 성적관리, 포트폴리오 및 학원장페이지 UI 재구성

### 피그마 작성
    - 오전 유튜브 라이브 방송하며 피그마 학습
    - 학습자료를 바탕으로 컴포넌트 구성



# 0118

### 시스템 UI 및 유저 스토리보드 구성
    - 학부모 학원장 메인페이지 구성
    - UI 재구성


### 피그마 작성
    - 기본 틀 컴포넌트 제작
    - 학부모 관련 페이지 작성



# 0119


### 피그마 작성
    - 전반적인 모든 피그마 작성
    - 컨설턴트님 점검 후 수정 사항 작성
    - 추후 작성 예정


# 0120

### 피그마 작성
    - 문의 페이지 및 회원가입 페이지 작성
    - 어제자 수정 사항 보완하기 위한 관련 회의
    - 비회원 학원등록 문의 및 학원과 관계없는 학부모도 학원장과 상담 가능하도록 수정
    - 스케줄 및 출결 관련 프론트 수정

### 프론트엔드 개발 환경 공유
    - Vue Vuex Vue-router 등 환경 세팅
    - Vue2와 Vue3 차이점 학습