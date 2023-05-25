import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/client-api';
import LikeButton from './index';

export default {
  title: 'common/Button/Like',
  component: LikeButton,

  parameters: {
    componentSubtitle: '좋아요 버튼 컴포넌트',
  },

  args: {
    onClick: action('좋아요 토글'),
    likeCount: 10,
    isLiked: false,
  },
} as ComponentMeta<typeof LikeButton>;

const Template: ComponentStory<typeof LikeButton> = ({ ...args }) => {
  const [a, updateArgs] = useArgs();
  const onClickHandler = () => {
    updateArgs({
      ...args,
      isLiked: !args.isLiked,
      likeCount: args.isLiked ? args.likeCount - 1 : args.likeCount + 1,
    });
  };
  return <LikeButton {...args} onClick={onClickHandler} />;
};

export const Like = Template.bind({});
