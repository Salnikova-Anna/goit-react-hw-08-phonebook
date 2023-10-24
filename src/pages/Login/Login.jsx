import LoginForm from 'components/LoginForm/LoginForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/operations';
import { authSelector } from 'redux/auth/selector';

const Login = () => {
  const isAuth = useSelector(authSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = body => {
    dispatch(loginThunk(body));
  };

  useEffect(() => {
    isAuth && navigate('/contacts');
    console.log(isAuth);
  }, [isAuth, navigate]);

  return <LoginForm login={login} />;
};

export default Login;
