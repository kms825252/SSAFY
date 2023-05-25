import styled from 'styled-components';
import { TitleProps } from './Title';
import { media } from '@/utils/media';

const SubTitle = styled.h2<TitleProps>`
  display: ${({ display }) => display || 'block'};
  text-align: ${({ textAlign }) => textAlign || 'center'};

  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  color: ${({ color, theme: { colors } }) => color || colors.dim_900};

  font-size: ${({ theme: { fonts } }) => fonts.desktop_h_4xl};
  line-height: ${({ theme: { lineHeights } }) => lineHeights.desktop_h_4xl};
  font-weight: ${({ fontWeight }) => fontWeight || '700'};
  letter-spacing: -0.02em;

  ${media.phone`
      font-size: ${({ theme }: any) => theme.fonts.mobile_h_3xl};
      line-height: ${({ theme }: any) => theme.lineHeights.mobile_h_3xl};
   `}
`;

export default SubTitle;
