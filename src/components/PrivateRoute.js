import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loggedInSelector, refreshSelector } from 'redux/auth/selector';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(loggedInSelector);
  const isRefreshing = useSelector(refreshSelector);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
