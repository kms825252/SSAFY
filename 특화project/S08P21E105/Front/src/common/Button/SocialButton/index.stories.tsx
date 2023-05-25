import { ComponentMeta, ComponentStory } from '@storybook/react';
import SocialButton from '@/common/Button/SocialButton/index';
import SOCIAL from '@/constants/social';

export default {
  title: 'common/Button/Social',
  component: SocialButton,

  parameters: {
    componentSubtitle: '소셜 로그인 버튼 컴포넌트',
  },
} as ComponentMeta<typeof SocialButton>;

const Template: ComponentStory<typeof SocialButton> = (args) => <SocialButton {...args} />;

export const KakaoButton = Template.bind({});
KakaoButton.args = {
  color: SOCIAL.KAKAO.color,
  icon: SOCIAL.KAKAO.icon,
};

export const GoogleButton = Template.bind({});
GoogleButton.args = {
  color: SOCIAL.GOOGLE.color,
  icon: SOCIAL.GOOGLE.icon,
};
