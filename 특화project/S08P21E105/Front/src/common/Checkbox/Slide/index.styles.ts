import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 3.5rem;
  height: 1.9rem;
  border-radius: 1rem;
  background-color: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    margin: 3px;
    background-color: #ffffff;
    box-shadow: ${({ theme: { shadows } }) => shadows.basic};
    transition: 0.2s;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${({ theme: { colors } }) => colors.main_500};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      margin-left: 50%;
      transition: 0.2s;
    }
  }
`;
