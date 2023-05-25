import { atom } from 'recoil';

interface ToastProps {
  type: 'positive' | 'negative';
  message: string;
  isVisible: boolean;
}

const toastState = atom<ToastProps>({
  key: 'toastState',
  default: {
    type: 'positive',
    message: '',
    isVisible: false,
  },
});

export default toastState;
