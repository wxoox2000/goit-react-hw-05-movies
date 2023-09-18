import styled from 'styled-components';

export const Wrap = styled.div`
    padding-left: 20px;
    margin-top: 90px;
`;

export const Field = styled.input`
  padding: 10px;
  border: 2px solid black;
  border-radius: 14px;
  margin-right: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 14px;
  padding: 12px;
  background-color: #a9ee1550;
  transform: scale(1);
  transition: background-color 300ms ease, transform 300ms ease;
  &:hover {
    background-color: orange;
    transform: scale(1.1);
  }
`;