import { Link } from 'react-router-dom';
import {
  LoginWrap,
  LoginFormStyled,
  LoginFormLabel,
  LoginFormButton,
  LoginFormInput,
} from './LoginForm.styled';

const LoginForm = ({ login }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    login({
      email: email.value,
      password: password.value,
    });
    e.currentTarget.reset();
  };

  return (
    <LoginWrap>
      <Link to="/">Back home</Link>
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
