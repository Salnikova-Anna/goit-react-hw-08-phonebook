import { deleteToken } from 'api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelector } from 'redux/auth/selector';
import { HeaderList, HeaderNav, HeaderNavLink } from './Header.styled';
import { logOutThunk } from 'redux/auth/operations';

const Header = () => {
  const isAuth = useSelector(authSelector);
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
        {isAuth && (
          <li>
            <HeaderNavLink to="contacts">Contacts</HeaderNavLink>
          </li>
        )}

        {!isAuth ? (
          <li>
            <HeaderNavLink to="login">Log in</HeaderNavLink>
          </li>
        ) : (
          <li>
            <button type="button" onClick={handleLotOutBtn}>
              Log out
            </button>
          </li>
        )}

        {!isAuth && (
          <li>
            <HeaderNavLink to="registration">Registration</HeaderNavLink>
          </li>
        )}
      </HeaderList>
    </HeaderNav>
  );
};

export default Header;
