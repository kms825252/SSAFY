import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import Checkbox from '@/common/Checkbox/index';

export default {
  title: 'common/Input/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: '체크박스 컴포넌트',
  },

  args: {
    checked: false,
    children: '체크박스',
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ ...args }) => {
  const [a, updateArgs] = useArgs();
  const onChangeHandler = () => {
    updateArgs({
      ...args,
      checked: !args.checked,
    });
  };
  return <Checkbox {...args} onChange={onChangeHandler} />;
};

export const Basic = Template.bind({});
Basic.args = {
  label: '체크박스',
};
