import styled from 'styled-components';

export const Button = styled.button<{ backgroundColor: string }>`
  /* 공통 디자인 */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.875rem;
  height: 2.875rem;
  border: none;
  border-radius: 0.25rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
  cursor: pointer;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
