import { HTMLAttributes } from 'react';
import { useTheme } from 'styled-components';
import { ReactComponent as IconHeart } from '@/assets/svgs/heart.svg';
import * as Styled from './index.styles';
import countFormatter from '../../../utils/count-formatter';

export interface LikeProps extends HTMLAttributes<HTMLButtonElement> {
  /** 좋아요 여부 */
  isLiked: boolean;
  /** 좋아요 수 */
  likeCount: number;
  /** SVG width */
}

const LikeButton = ({ isLiked, onClick, likeCount, ...rest }: LikeProps) => {
  const theme = useTheme();
  const strokeColor = isLiked ? theme.colors.error : theme.colors.dim_500;
  const fillColor = isLiked ? theme.colors.error : 'white';

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <Styled.Button onClick={onClick} isLiked={isLiked} {...rest}>
      <IconHeart fill={fillColor} stroke={strokeColor} width="16px" height="14px" />
      {countFormatter(likeCount)}
    </Styled.Button>
  );
};

export default LikeButton;
