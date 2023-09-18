import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const MainNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 18px;
  color: black;
  text-decoration: none;
  &.active {
    color: orange;
  }
`;

export const Head = styled.header`
  padding: 20px;
  background-color: #a9ee1550;
  box-shadow: 0 5px 5px 3px #aaee151f;
  position: fixed;
  opacity: 1;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
`;
