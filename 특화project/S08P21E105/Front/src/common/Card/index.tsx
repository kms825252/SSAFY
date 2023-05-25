import { HTMLAttributes } from 'react';
import * as Styled from './index.styles';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** 가로 길이 */
  width?: string;
  /** 세로 길이 */
  height?: string;
  /** padding, css를 사용할 때 처럼 shorthand도 가능 */
  padding?: string;
}

const Card = ({ children, width, height, ...rest }: CardProps) => {
  return (
    <Styled.Card width={width} height={height} {...rest}>
      {children}
    </Styled.Card>
  );
};

export default Card;
