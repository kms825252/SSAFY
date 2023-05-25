import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { TOAST_TIMEOUT } from '@/constants';
import { toastState } from '@/recoil';
import { logOnDev } from '@/utils/logging';
import { ToastWrapper } from '@/common/Toast/index.styles';

const Toast = () => {
  const [toast, setToast] = useRecoilState(toastState);

  logOnDev.log(toast);

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (toast.message) {
      timer = setTimeout(() => {
        setToast({ message: '', isVisible: false, type: 'positive' });
      }, TOAST_TIMEOUT);
    }

    return () => clearTimeout(timer);
  }, [toast.message, setToast]);

  return (
    <ToastWrapper>
      {toast.type === 'positive' ? `😁 ${toast.message}` : `😢 ${toast.message}`}
    </ToastWrapper>
  );
};

export default Toast;
