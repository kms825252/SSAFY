import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  &:before {
    display: inline-block;
    content: '';
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 0.5rem;
    background-color: ${({ theme: { colors } }) => colors.main_100};
    border: 2px solid ${({ theme: { colors } }) => colors.main_500};
    border-radius: 0.25rem;
  }
  /* &:hover:before {
    background-color: transparent;
  } */
  &:after {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    opacity: 0;
    content: '';
    height: 1.5rem;
    width: 1.5rem;
    border: 2px solid transparent;
    border-radius: 0.35rem;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${({ theme: { colors } }) => colors.main_500};
`;

export const Input = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
  &:checked + ${Label} {
    :after {
      opacity: 1;
    }
  }
`;
