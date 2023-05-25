import React, { HTMLAttributes } from 'react';
import { IconFillStar, IconOutlineStar } from '../../icons';
import * as Styled from './index.styles';

export type RemEmPxString = `${string}${'rem' | 'em' | 'px' | '%'}`;
export interface BookmarkProps extends HTMLAttributes<HTMLSpanElement> {
  /** 북마크 여부 */
  isBookmarked: boolean;
  /** SVG width */
  width?: RemEmPxString;
  /** SVG height */
  height?: RemEmPxString;
}
const BookmarkButton = ({ isBookmarked, onClick, ...rest }: BookmarkProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <Styled.Span onClick={onClick} {...rest}>
      {isBookmarked && <IconFillStar size="100%" />}
      {isBookmarked || <IconOutlineStar size="100%" />}
    </Styled.Span>
  );
};

export default BookmarkButton;
