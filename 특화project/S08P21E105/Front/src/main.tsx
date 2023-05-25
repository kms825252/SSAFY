import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import MyRecoilProvider from './recoil/MyRecoilProvider';
import router from './routes/router';
import './styles/reset.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <MyRecoilProvider>
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </MyRecoilProvider>
);
