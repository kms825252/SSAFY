import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/client-api';
import BookmarkButton from './index';

export default {
  title: 'common/Button/Bookmark',
  component: BookmarkButton,

  parameters: {
    componentSubtitle: '북마크 버튼 컴포넌트',
  },

  args: {
    onClick: action('북마크 토글'),
    isBookmarked: false,
    width: '2rem',
    height: '2rem',
  },
} as ComponentMeta<typeof BookmarkButton>;

const Template: ComponentStory<typeof BookmarkButton> = ({ ...args }) => {
  const [a, updateArgs] = useArgs();
  const onClickHandler = () => {
    updateArgs({ ...args, isBookmarked: !args.isBookmarked });
  };
  return <BookmarkButton {...args} onClick={onClickHandler} />;
};

export const Bookmark = Template.bind({});
