import styled, { css } from 'styled-components';
import { InputProps } from '@/common/Input/index';

const designList = {
  borderAll: css`
    border: 1px solid;
    border-color: ${({ theme: { colors } }) => colors.dim_200};
    border-radius: 0.5rem;
  `,
  borderBottom: css`
    border: none;
    border-bottom: 1px solid;
    box-shadow: none;
    border-color: ${({ theme: { colors } }) => colors.dim_200};
  `,
};

export const Input = styled.input<InputProps>`
  -webkit-appearance: none; /* Safari and Chrome */
  -moz-appearance: none; /* Firefox */
  /* 네이티브로 지원되는 모양들을 해제하거나 추가 */
  appearance: none;

  ${({ designType }) => designType && designList[designType]};
  ${({ designType, borderRadius, border }) =>
    !designType &&
    css`
      border: ${border || '1px solid'};
      border-radius: ${borderRadius || '0.5rem'};
      border-color: ${({ theme: { colors } }) => colors.dim_200};
    `};

  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding || '0.5rem'};
  height: ${({ height }) => height || '2.0rem'};
  width: ${({ width }) => width || '17.875rem'};
  box-sizing: border-box;
  background-color: ${({ theme: { colors } }) => colors.back};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  color: ${({ theme: { colors } }) => colors.dim_900};

  :focus {
    outline: none;
    box-shadow: ${({ boxShadow }) => boxShadow || 'none'};
  }
  ::placeholder {
    color: ${({ theme: { colors } }) => colors.dim_200};
  }
`;
