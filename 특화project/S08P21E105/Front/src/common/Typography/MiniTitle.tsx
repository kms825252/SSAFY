import styled, { css } from 'styled-components';
import { TitleProps } from './Title';
import { media } from '@/utils/media';

type SizeType = 'xl' | '2xl' | '3xl';

interface MiniTitleProps extends TitleProps {
  sizeType: SizeType;
}

const sizeList = {
  xl: css`
    font-size: ${({ theme: { fonts } }) => fonts.desktop_h_xl};
    line-height: ${({ theme: { lineHeights } }) => lineHeights.desktop_h_xl};
  `,

  '2xl': css`
    font-size: ${({ theme: { fonts } }) => fonts.desktop_h_2xl};
    line-height: ${({ theme: { lineHeights } }) => lineHeights.desktop_h_2xl};

    ${media.phone`
      font-size: ${({ theme }: any) => theme.fonts.mobile_h_xl};
      line-height: ${({ theme }: any) => theme.lineHeights.mobile_h_xl};
    `}
  `,

  '3xl': css`
    font-size: ${({ theme: { fonts } }) => fonts.desktop_h_3xl};
    line-height: ${({ theme: { lineHeights } }) => lineHeights.desktop_h_3xl};

    ${media.phone`
      font-size: ${({ theme }: any) => theme.fonts.mobile_h_2xl};
      line-height: ${({ theme }: any) => theme.lineHeights.mobile_h_2xl};
    `}
  `,
};

const MiniTitle = styled.h3<MiniTitleProps>`
  display: ${({ display }) => display || 'block'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  color: ${({ color, theme: { colors } }) => color || colors.dim_900};

  ${({ sizeType }) => sizeType && sizeList[sizeType]}
`;

export default MiniTitle;
