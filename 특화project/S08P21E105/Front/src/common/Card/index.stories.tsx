import { ComponentMeta, ComponentStory } from '@storybook/react';
import Card from './index';
import { Title } from '@/common/Typography';

export default {
  title: 'common/Card',
  component: Card,

  parameters: {
    componentSubtitle: '카드 컴포넌트, Wrapper',
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: <Title>123</Title>,
  width: '20rem',
  height: '20rem',
};
