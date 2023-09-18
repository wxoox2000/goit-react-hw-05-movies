import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrap = styled.div`
  padding-left: 20px;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Title = styled.h1`
  color: orange;
`;

export const SubInfo = styled.h2`
  color: orange;
`;

export const Genre = styled.li`
  color: orange;
  & > p {
    color: black;
  }
`;

export const GenreList = styled.ul`
  padding-left: 20px;
  list-style: disc;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: orange;
  }
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 15px;
  width: 100px;
  border-radius: 14px;
  background-color: #a9ee1550;
  transform: scale(1);
  transition: background-color 300ms ease, transform 300ms ease;
  &:hover {
    background-color: orange;
    transform: scale(1.1);
  }
`;
