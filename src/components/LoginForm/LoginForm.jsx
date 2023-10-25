import { useDispatch } from 'react-redux';
import {
  LoginWrap,
  LoginFormStyled,
  LoginFormLabel,
  LoginFormButton,
  LoginFormInput,
} from './LoginForm.styled';
import { loginThunk } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <LoginWrap>
      <LoginFormStyled autoComplete="off" onSubmit={handleSubmit}>
        <LoginFormLabel>
          Email
          <LoginFormInput
            type="email"
            name="email"
            required
            placeholder="Enter email ..."
          />
        </LoginFormLabel>
        <LoginFormLabel>
          Password
          <LoginFormInput
            type="password"
            name="password"
            required
            placeholder="Enter password ..."
          />
        </LoginFormLabel>
        <LoginFormButton type="submit">Log In</LoginFormButton>
      </LoginFormStyled>
    </LoginWrap>
  );
};

export default LoginForm;
