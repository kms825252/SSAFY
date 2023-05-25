import HomePage from '@/pages/HomePage/index';
import Layout from '@/layout/Layout';

export default {
  title: 'pages/Home',
  component: HomePage,
  parameters: {
    componentSubtitle: '메인 홈 페이지',
  },
};

export const HomeStory = () => (
  <Layout>
    <HomePage />
  </Layout>
);
