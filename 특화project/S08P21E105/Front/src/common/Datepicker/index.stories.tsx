import { ComponentStory } from '@storybook/react';
import Datepicker from '@/common/Datepicker/index';

export default {
  title: 'common/Datepicker',
  component: Datepicker,
  parameters: {
    componentSubtitle: '달력 컴포넌트 / react-day-picker 사용',
  },
};

const Template: ComponentStory<typeof Datepicker> = () => <Datepicker />;

export const DatePicker = Template.bind({});
