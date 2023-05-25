import styled from 'styled-components';
import { BookmarkProps } from '@/common/Button/BookmarkButton/index';

export const Span = styled.span<Omit<BookmarkProps, 'isBookmarked'>>`
  display: inline-block;
  width: ${({ width }) => width || '1rem'};
  height: ${({ height }) => height || '1rem'};
  cursor: pointer;
`;
