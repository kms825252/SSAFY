import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import Slide from '@/common/Checkbox/Slide/index';

export default {
  title: 'common/Input/ToggleSlide',
  component: Slide,
  parameters: {
    componentSubtitle: '토글 슬라이드 컴포넌트',
  },

  args: {
    checked: false,
    label: '슬라이드',
  },
} as ComponentMeta<typeof Slide>;

const Template: ComponentStory<typeof Slide> = ({ ...args }) => {
  const [a, updateArgs] = useArgs();
  const onChangeHandler = () => {
    updateArgs({
      ...args,
      checked: !args.checked,
    });
  };
  return <Slide {...args} onChange={onChangeHandler} />;
};

export const Basic = Template.bind({});
