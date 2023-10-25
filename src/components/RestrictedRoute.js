import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loggedInSelector } from 'redux/auth/selector';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(loggedInSelector);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
