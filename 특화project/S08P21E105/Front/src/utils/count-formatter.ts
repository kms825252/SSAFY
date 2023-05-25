/**
 * 숫자를 입력하면 축약해서 문자로 리턴하는 함수
 * @param count 숫자
 * @returns 숫자를 1K 처럼 축약형태로 리턴함
 */
const countFormatter = (count: number): string => {
  const formats = [
    { unit: 1e3, abbreviation: 'K' },
    { unit: 1e6, abbreviation: 'M' },
    { unit: 1e9, abbreviation: 'B' },
    { unit: 1e12, abbreviation: 'T' },
    { unit: 1e15, abbreviation: 'P' },
    { unit: 1e18, abbreviation: 'E' },
  ];

  if (count < 1e3) return String(count);

  const { unit, abbreviation } = [...formats].reverse().find((format) => count >= format.unit)!;

  return parseFloat((count / unit).toFixed(2)) + abbreviation;
};

export default countFormatter;
