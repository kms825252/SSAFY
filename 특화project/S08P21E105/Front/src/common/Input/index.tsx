import React from 'react';
import * as Styled from './index.styles';

export type DesignType = 'borderAll' | 'borderBottom';
export interface InputProps {
  margin?: string;
  padding?: string;
  height?: string;
  width?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  boxShadow?: string;
  designType?: DesignType;
}

const Input = ({ ...rest }: InputProps) => {
  return <Styled.Input {...rest} />;
};

export default Input;
