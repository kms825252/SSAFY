import styled, { css } from 'styled-components';
import { ButtonProps } from '@/common/Button/index';

const colorStyles = css<ButtonProps>`
  ${({ theme, color, filled }) => {
    const selected = theme.colors[color!];
    return css`
      background-color: ${selected};
      ${!filled &&
      css`
        color: ${selected};
        background: none;
        &:hover {
          background: ${selected};
          color: white;
        }
      `}
    `;
  }}
`;

const sizes = {
  large: {
    fontSize: '1.25rem',
  },
  medium: {
    fontSize: '1rem',
  },
  small: {
    fontSize: '0.875rem',
  },
};

const sizeStyles = css<ButtonProps>`
  ${({ sizeType }) => css`
    font-size: ${sizes[sizeType!].fontSize};
  `}
`;

const fullWidthStyle = css<ButtonProps>`
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
      justify-content: center;
      &:not(:first-of-type) {
        margin-left: 0;
        margin-top: 1rem;
      }
    `}
`;

export const Button = styled.button<ButtonProps>`
  /* 공통 스타일 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 0.25rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease, color 0.3s ease, filter 0.2s ease;

  /* 크기 */

  ${sizeStyles}
  /* 색상 */
  ${colorStyles}
  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(0.9);
  }

  /* 기타 */
  &:not(:first-of-type) {
    margin-left: 1rem;
  }

  ${fullWidthStyle}
`;
