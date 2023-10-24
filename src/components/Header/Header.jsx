import { deleteToken } from 'api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loggedInSelector } from 'redux/auth/selector';
import {
  HeaderBtnLogOut,
  HeaderList,
  HeaderNav,
  HeaderNavLink,
} from './Header.styled';
import { logOutThunk } from 'redux/auth/operations';

const Header = () => {
  const isLoggedIn = useSelector(loggedInSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLotOutBtn = () => {
    dispatch(logOutThunk());
    deleteToken();
    navigate('/');
  };

  return (
    <HeaderNav>
      <HeaderList>
        <li>
          <HeaderNavLink to="/">Home</HeaderNavLink>
        </li>
        {isLoggedIn && (
          <li>
            <HeaderNavLink to="contacts">Contacts</HeaderNavLink>
          </li>
        )}

        {!isLoggedIn ? (
          <li style={{ marginLeft: 'auto' }}>
            <HeaderNavLink to="login">Log in</HeaderNavLink>
          </li>
        ) : (
          <li style={{ marginLeft: 'auto' }}>
            <HeaderBtnLogOut type="button" onClick={handleLotOutBtn}>
              Log out
            </HeaderBtnLogOut>
          </li>
        )}

        {!isLoggedIn && (
          <li>
            <HeaderNavLink to="registration">Registration</HeaderNavLink>
          </li>
        )}
      </HeaderList>
    </HeaderNav>
  );
};

export default Header;
