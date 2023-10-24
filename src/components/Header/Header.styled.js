import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNav = styled.nav`
  padding: 15px 70px 15px 25px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
`;

export const HeaderList = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 0 30px;
`;

export const HeaderNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 25px;

  &.active {
    color: red;
  }
`;

export const HeaderBtnLogOut = styled.button`
  width: 100px;
  display: block;
  margin-left: auto;
  background-color: transparent;
  padding: 10px 0 10px 0;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
`;
