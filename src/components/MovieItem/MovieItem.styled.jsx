import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieLink = styled(Link)`
  width: 300px;
  height: 300px;
  border-radius: 14px;
  border: 2px solid black;
  text-decoration: none;
  color: black;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  transform: scale(1);
  transition: border 300ms ease, transform 300ms ease, color 300ms ease;
  &:hover {
    border: 2px solid #a9ee1550;
    transform: scale(1.1);
    color: orange;
  }
`;

export const Image = styled.img`
width: 100%;
  border-radius: 14px;
`;