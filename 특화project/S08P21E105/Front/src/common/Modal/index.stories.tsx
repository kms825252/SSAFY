import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import Modal from '@/common/Modal/index';
import Button from '@/common/Button';
import ConfirmModalChildren from '@/common/Modal/ConfirmModalChildren';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    componentSubtitle: '모달 컴포넌트',
  },

  args: {
    isModalOpen: false,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({ ...args }) => {
  const [a, updateArgs] = useArgs();
  const toggleModalOpen = () => {
    updateArgs({ ...args, isModalOpen: !args.isModalOpen });
  };

  const closeModal = () => {
    updateArgs({ ...args, isModalOpen: false });
  };
  return (
    <>
      <Modal {...args} isModalOpen={args.isModalOpen} handleClose={closeModal}>
        {args.children}
      </Modal>
      <Button onClick={toggleModalOpen}>모달 열기</Button>
    </>
  );
};

export const ModalTemplate = Template.bind({});

export const ConfirmModal = Template.bind({});

ConfirmModal.args = {
  flexDirection: 'column',
  children: <ConfirmModalChildren />,
  height: '200px',
  width: '25%',
};
