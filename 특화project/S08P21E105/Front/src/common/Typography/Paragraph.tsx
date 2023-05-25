import styled, { css } from 'styled-components';

type SizeType = 'lg' | 'sm' | 'xm' | 'base';

interface ParagraphProps {
  sizeType: SizeType;
  margin?: string;
  padding?: string;
  color?: string;
  fontWeight?: string;
  display?: 'block' | 'inline-block' | 'inline-flex' | 'inline';
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'inherit';
}

const sizeList = {
  lg: css`
    font-size: ${({ theme: { fonts } }) => fonts.body_lg};
    line-height: ${({ theme: { lineHeights } }) => lineHeights.body_lg};
  `,
  base: css`
    font-size: ${({ theme: { fonts } }) => fonts.body_base};
    line-height: ${({ theme: { lineHeights } }) => lineHeights.body_base};
  `,

  sm: css`
    font-size: ${({ theme: { fonts } }) => fonts.body_sm};
    line-height: ${({ theme: { lineHeights } }) => lineHeights.body_sm};
  `,

  xm: css`
    font-size: ${({ theme: { fonts } }) => fonts.body_xm};
    line-height: ${({ theme: { lineHeights } }) => lineHeights.body_xm};
  `,
};

const Paragraph = styled.p<ParagraphProps>`
  display: ${({ display }) => display || 'block'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  color: ${({ theme: { colors }, color }) => color || colors.dim_900};
  font-weight: ${({ fontWeight }) => fontWeight || '400'};

  ${({ sizeType }) => sizeType && sizeList[sizeType]}
`;

export default Paragraph;
