import React from 'react';
import * as Styled from './index.styles';
import Button from '@/common/Button';

const ConfirmModalChildren = ({ handleClose }: { handleClose?: () => void }) => {
  return (
    <>
      <Styled.ModalHeader>
        <h2>삭제</h2>
      </Styled.ModalHeader>
      <Styled.ModalBody>해당 글을 삭제하시겠습니까?</Styled.ModalBody>
      <Styled.ModalFooter>
        <Button filled={false} onClick={handleClose}>
          취소
        </Button>
        <Button>삭제</Button>
      </Styled.ModalFooter>
    </>
  );
};

export default ConfirmModalChildren;
