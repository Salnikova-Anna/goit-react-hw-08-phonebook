import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelector } from 'redux/auth/selector';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(authSelector);
  // return isAuth ? children : <Navigate to="/login" />;
  return children;
};

export default PrivateRoute;
