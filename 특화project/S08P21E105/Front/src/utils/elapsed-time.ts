/**
 * 숫자를 입력하면 지난 시간을 문자로 변형하는 함수
 * @param time 숫자
 * @returns 숫자를 1분 전 처럼 축약형태로 리턴함
 */
const elapsedTime = (time: number) => {
  const offset = new Date().getTimezoneOffset();
  const written = new Date(time - offset * 60 * 1000);
  const now = new Date();
  const diff = (Number(now) - Number(written)) / 1000;

  const times = [
    { name: '년', ms: 60 * 60 * 24 * 365 },
    { name: '달', ms: 60 * 60 * 24 * 30 },
    { name: '일', ms: 60 * 60 * 24 },
    { name: '시간', ms: 60 * 60 },
    { name: '분', ms: 60 },
  ];

  // eslint-disable-next-line no-restricted-syntax
  for (const value of times) {
    const rst = Math.floor(diff / value.ms);

    if (rst > 0) {
      return `${rst}${value.name} 전`;
    }
  }

  return '방금 전';
};

export default elapsedTime;
