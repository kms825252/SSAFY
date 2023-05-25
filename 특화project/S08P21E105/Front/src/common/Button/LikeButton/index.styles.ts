import styled from 'styled-components';

export const Button = styled.button<{ isLiked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  min-width: 50px;
  height: 30px;
  gap: 4px;
  background-color: inherit;
  font-size: 0.7rem;
  cursor: pointer;
  border: 1px solid ${({ theme, isLiked }) => (isLiked ? theme.colors.error : theme.colors.dim_500)};
  color: ${({ theme, isLiked }) => (isLiked ? theme.colors.error : theme.colors.dim_500)};
`;
