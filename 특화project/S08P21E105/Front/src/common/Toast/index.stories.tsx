import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useSetRecoilState } from 'recoil';
import Toast from '@/common/Toast/index';
import { toastState } from '@/recoil';

export default {
  title: 'common/Toast',
  component: Toast,
  parameters: {
    componentSubtitle: '토스트 Alert 컴포넌트',
  },
} as ComponentMeta<typeof Toast>;

const MockToast = () => {
  const setToast = useSetRecoilState(toastState);
  // setToast({ message: '테스트', isVisible: true });
};

const Template: ComponentStory<typeof Toast> = () => {
  return <Toast />;
};

export const ToastStory = Template.bind({});
