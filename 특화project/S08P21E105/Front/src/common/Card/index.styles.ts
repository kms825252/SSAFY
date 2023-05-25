import styled from 'styled-components';
import { CardProps } from '@/common/Card/index';

export const Card = styled.div<CardProps>`
  border-radius: 0.5rem;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  padding: ${({ padding }) => padding || '1rem'};
  box-shadow: ${({ theme: { shadows } }) => shadows.basic};
  background-color: ${({ theme: { colors } }) => colors.white};

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0 3px 6px, rgba(0, 0, 0, 0.23) 0 3px 6px;
    translate: 1px 1px;
  }
`;
