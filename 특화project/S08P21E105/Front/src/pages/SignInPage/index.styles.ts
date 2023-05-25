import styled from 'styled-components';

export const Session = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: whitesmoke;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40rem;
  width: 32rem;
  //border: 1px solid;
  background-color: white;
`;

export const Title = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const LoginContainer = styled.div`
  height: 17rem;
  width: 21rem;
  //border: 1px solid;
  button {
    margin-top: 2rem;
  }
`;

export const InputName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #7e7e7e;
`;
export const Input = styled.input`
  border: 1px solid gray;
  height: 2.5rem;
  width: 100%;
  font-size: 0.7rem;
  text-indent: 0.5rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 12rem;
  margin-right: 2rem;
  margin-bottom: 3rem;
`;
export const OtherLoginContainer = styled.div`
  display: flex;
`;
export const OtherLogin = styled.div`
  margin: 1rem 0.5rem;
  border-radius: 8px;
  background-color: #d9d9d9;
  height: 3rem;
  width: 3rem;
`;
