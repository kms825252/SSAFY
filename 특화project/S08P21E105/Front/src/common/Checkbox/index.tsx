import React from 'react';
import * as Styled from './index.styles';

export interface CheckboxProps {
  label: string;
  checked: boolean;
  children?: React.ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ label, checked, children, onChange }: CheckboxProps) => {
  return (
    <>
      <Styled.Input type="checkbox" id={label} name={label} checked={checked} onChange={onChange} />
      <Styled.Label htmlFor={label}>{children}</Styled.Label>
    </>
  );
};

export default Checkbox;
