import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './index';

// 스토리북의 왼쪽 패널에 표시된다
export default {
  title: 'common/Button/Basic',
  component: Button,
  // 기본 props
  args: {
    children: 'BUTTON',
  },

  parameters: {
    componentSubtitle: '버튼 컴포넌트',
  },
} as ComponentMeta<typeof Button>;

// Template를 이용해서 Story를 생성한다
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Main = Template.bind({});
Main.args = {
  children: 'MAIN',
};

export const Sub1 = Template.bind({});
Sub1.args = {
  children: 'SUB1',
  color: 'sub1_500',
};

export const Sub2 = Template.bind({});
Sub2.args = {
  children: 'SUB2',
  color: 'sub2_500',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'FULL WIDTH',
  fullWidth: true,
};
