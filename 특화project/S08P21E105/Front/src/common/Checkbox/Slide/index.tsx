import { CheckboxProps } from '../index';
import * as Styled from './index.styles';

const Slide = ({ label, onChange, checked }: CheckboxProps) => {
  return (
    <Styled.CheckBoxWrapper>
      <Styled.CheckBox id={label} type="checkbox" checked={checked} onChange={onChange} />
      <Styled.CheckBoxLabel htmlFor={label} />
    </Styled.CheckBoxWrapper>
  );
};

export default Slide;
