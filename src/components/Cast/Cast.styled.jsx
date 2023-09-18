import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 15px;
`;

export const ActorCard = styled.li`
  width: 300px;
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
  transition: border 300ms ease, transform 300ms ease;
  &:hover {
    border: 2px solid #a9ee1550;
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  border-radius: 14px;
`;

export const Name = styled.p`
  color: orange;
`;
