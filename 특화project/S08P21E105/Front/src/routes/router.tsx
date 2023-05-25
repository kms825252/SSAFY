import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import App from '@/pages/App';
import PATH from '@/constants/paths';
import DestinationsPage from '@/pages/DestinationsPage';

const HomePage = lazy(() => import('@/pages/HomePage'));
const SignInPage = lazy(() => import('@/pages/SignInPage'));
const SignUpPage = lazy(() => import('@/pages/SignUpPage'));
const PlanPage = lazy(() => import('@/pages/PlanPage'));
const PlanRepoPage = lazy(() => import('@/pages/PlanRepoPage'));
const TripRecordPage = lazy(() => import('@/pages/TripRecordPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, path: `${PATH.HOME}`, element: <HomePage /> },
      { path: `${PATH.SIGN_IN}`, element: <SignInPage /> },
      { path: `${PATH.SIGN_UP}`, element: <SignUpPage /> },
      { path: `${PATH.PLAN}`, element: <PlanPage /> },
      { path: `${PATH.PLAN_REPOSITORY}`, element: <PlanRepoPage /> },
      { path: `${PATH.TRIP_RECORD}`, element: <TripRecordPage /> },
      { path: `${PATH.DESTINATIONS}`, element: <DestinationsPage /> },
      {
        path: `${PATH.PROFILE}`,
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;
