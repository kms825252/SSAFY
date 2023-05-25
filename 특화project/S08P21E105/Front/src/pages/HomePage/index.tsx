import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button';
import LikeButton from '../../common/Button/LikeButton';
import Bookmark from '../../common/Button/BookmarkButton';
import Datepicker from '@/common/Datepicker';
import Dropdown from '@/common/Select';

const AppBlock = styled.div`
  background-color: #fff;
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  &:not(:first-child) {
    margin-top: 1rem;
  }
`;
const HomePage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('DEV');
  const onClick = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <>
      <h1>홈 페이지</h1>
      <Datepicker />
      <AppBlock>
        <Dropdown
          items={[
            { text: '개발', value: 'DEV' },
            { text: '커리어', value: 'CAREER' },
          ]}
          changeOption={setActiveCategory}
        />
        <ButtonGroup>
          <Button color="sub1_500" sizeType="large" filled={false}>
            BUTTON
          </Button>
          <Button color="sub2_500" sizeType="medium" filled={false}>
            BUTTON
          </Button>
          <Button sizeType="small" filled={false}>
            BUTTON
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="sub1_500" sizeType="large">
            BUTTON
          </Button>
          <Button color="sub2_500" sizeType="medium">
            BUTTON
          </Button>
          <Button sizeType="small">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="sub1_500" sizeType="large">
            BUTTON
          </Button>
          <Button color="sub2_500" sizeType="medium">
            BUTTON
          </Button>
          <Button sizeType="small">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="sub1_500" sizeType="large" fullWidth>
            BUTTON
          </Button>
          <Button color="sub2_500" sizeType="medium" fullWidth>
            BUTTON
          </Button>
          <Button sizeType="small" fullWidth>
            BUTTON
          </Button>
        </ButtonGroup>
        <Bookmark isBookmarked={isLiked} width="3rem" height="3rem" />
        <LikeButton isLiked={isLiked} onClick={onClick} likeCount={2} />
      </AppBlock>
    </>
  );
};

export default HomePage;
