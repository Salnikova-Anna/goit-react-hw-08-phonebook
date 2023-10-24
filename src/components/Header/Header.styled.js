import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderNav = styled.nav`
  padding: 15px 0 15px 25px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
`;

export const HeaderList = styled.ul`
  display: flex;
  list-style: none;
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
