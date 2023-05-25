import { atom } from 'recoil';

const initialState = {
  user: null,
  accessToken: null,
};

const userState = atom({
  key: 'userState',
  default: initialState,
});

export default userState;
