import { ComponentStory } from '@storybook/react';
import { MiniTitle, SubTitle, Title } from '@/common/Typography/index';

export default {
  title: 'common/Typography',
  component: <Title />,
};

export const TitleStory: ComponentStory<typeof Title> = (args) => <Title {...args}>제목</Title>;
TitleStory.args = {
  margin: '1rem',
  padding: '1rem',
  color: 'tomato',
  fontWeight: 700,
  display: 'inline-flex',
  textAlign: 'left',
};
export const SubTitleStory: ComponentStory<typeof SubTitle> = (args) => (
  <SubTitle {...args}>부제목</SubTitle>
);
SubTitleStory.args = {
  margin: '1rem',
  padding: '1rem',
  color: 'blue',
  fontWeight: 700,
  display: 'inline-flex',
  textAlign: 'left',
};

export const MiniTitleStory: ComponentStory<typeof MiniTitle> = (args) => (
  <MiniTitle sizeType="xl" {...args}>
    소제목
  </MiniTitle>
);

MiniTitleStory.args = {
  margin: '1rem',
  padding: '1rem',
  color: 'blue',
  fontWeight: 700,
  display: 'inline-flex',
  textAlign: 'left',
  sizeType: 'xl',
};
