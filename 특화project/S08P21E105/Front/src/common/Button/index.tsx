import { ButtonHTMLAttributes } from 'react';
import * as Styled from './index.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼의 색상 */
  color?: 'main_500' | 'sub1_500' | 'sub2_500';
  /** 버튼의 사이즈 */
  sizeType?: 'small' | 'medium' | 'large';
  /** 버튼의 fill 여부 */
  filled?: boolean;
  /** 버튼의 fullWidth 여부 */
  fullWidth?: boolean;
}

/**
 * 공통 버튼 컴포넌트
 */
const Button = ({
  children,
  color = 'main_500',
  sizeType = 'medium',
  filled = true,
  fullWidth = false,
  ...rest
}: ButtonProps) => {
  return (
    <Styled.Button
      type="button"
      color={color}
      sizeType={sizeType}
      filled={filled}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
