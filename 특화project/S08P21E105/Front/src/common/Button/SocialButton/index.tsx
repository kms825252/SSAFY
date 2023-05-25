import React from 'react';
import * as Styled from './index.styles';

export interface SocialButtonProps {
  color: string;
  icon: React.ReactNode;
}
const SocialButton = ({ icon, color }: SocialButtonProps) => {
  return <Styled.Button backgroundColor={color}>{icon}</Styled.Button>;
};

export default SocialButton;
