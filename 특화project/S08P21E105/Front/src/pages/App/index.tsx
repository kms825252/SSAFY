import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Suspense, useEffect } from 'react';
import MyThemeProvider from '../../styles/MyThemeProvider';
import Toast from '@/common/Toast';
import { toastState } from '@/recoil';
import Layout from '@/layout/Layout';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

const App = () => {
  const { isVisible } = useRecoilValue(toastState);
  const setToast = useSetRecoilState(toastState);
  useEffect(() => {
    setToast({
      type: 'positive',
      isVisible: true,
      message: '토스트 테스트(나중에 app.tsx에서 삭제)',
    });
  }, [setToast]);

  return (
    <QueryClientProvider client={queryClient}>
      <MyThemeProvider>
        {isVisible && <Toast />}
        <Layout>
          <Suspense fallback={<div>asd</div>}>
            <Outlet />
          </Suspense>
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </MyThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
