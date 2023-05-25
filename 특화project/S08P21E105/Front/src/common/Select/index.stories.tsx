import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Select from '@/common/Select/index';

export default {
  title: 'common/Select',
  component: Select,
  parameters: {
    componentSubtitle: '셀렉트 박스 컴포넌트',
  },
} as ComponentMeta<typeof Select>;

export const SelectStory: ComponentStory<typeof Select> = (args) => {
  const [activeCategory, setActiveCategory] = useState('DEV');
  return (
    <Select
      {...args}
      items={[
        { text: '개발', value: 'DEV' },
        { text: '커리어', value: 'CAREER' },
      ]}
      changeOption={setActiveCategory}
    />
  );
};
