import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registrationThunk } from 'redux/auth/operations';
import { authSelector } from 'redux/auth/selector';

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector(authSelector);

  const registration = body => {
    dispatch(registrationThunk(body));
  };

  useEffect(() => {
    isAuth && navigate('/contacts');
  }, [isAuth, navigate]);

  return <RegistrationForm registration={registration} />;
};

export default Registration;
