import styled from 'styled-components';
import { RxAvatar } from 'react-icons/rx';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Avatar = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: orange;
`;

export const AvLogo = styled(RxAvatar)`
  width: 30px;
  height: 30px;
  display: block;
`;

export const Review = styled.li`
width: 90%;
  border: 2px solid #e2a109cc;
  padding: 10px;
  border-radius: 14px;
  &:nth-of-type(odd) {
    background-color: #a9ee1523;
  }
`;

export const Author = styled.h2`
  display: block;
  width: fit-content;
`;

export const AuthorWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Rcontent = styled.p`
  font-style: oblique;
`;