import styled from 'styled-components';
import { media } from '@/utils/media';

export interface TitleProps {
  margin?: string;
  padding?: string;
  color?: string;
  fontWeight?: string;
  display?: 'block' | 'inline-block' | 'inline-flex' | 'inline';
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'inherit';
}

const Title = styled.h1<TitleProps>`
  display: ${({ display }) => display || 'block'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  color: ${({ color, theme: { colors } }) => color || colors.dim_900};

  font-size: ${({ theme: { fonts } }) => fonts.desktop_h_5xl};
  font-weight: ${({ fontWeight }) => fontWeight || '700'};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.desktop_h_5xl};
  letter-spacing: -0.02em;

  ${media.phone`
      font-size: ${({ theme }: any) => theme.fonts.mobile_h_4xl};
      line-height: ${({ theme }: any) => theme.lineHeights.mobile_h_4xl};
   `}
`;

export default Title;
