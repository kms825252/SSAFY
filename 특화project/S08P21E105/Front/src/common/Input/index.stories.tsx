import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '@/common/Input/index';

export default {
  title: 'common/Input/Text',
  component: Input,
  parameters: {
    componentSubtitle: '인풋 컴포넌트',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const BorderAll = Template.bind({});
BorderAll.args = {
  designType: 'borderAll',
};
export const BorderBottom = Template.bind({});
BorderBottom.args = {
  designType: 'borderBottom',
};
