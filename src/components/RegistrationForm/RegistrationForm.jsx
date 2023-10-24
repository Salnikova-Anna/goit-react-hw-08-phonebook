import { Link } from 'react-router-dom';
import {
  RegFormButton,
  RegFormInput,
  RegFormLabel,
  RegFormStyled,
  RegFormWrap,
} from './RegistrationForm.styled';

const RegistrationForm = ({ registration }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, email, password } = evt.target.elements;
    registration({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    evt.currentTarget.reset();
  };

  return (
    <RegFormWrap>
      <Link to="/">Back home</Link>
      <RegFormStyled onSubmit={handleSubmit}>
        <RegFormLabel>
          Name
          <RegFormInput
            type="text"
            name="name"
            placeholder="Enter name ..."
            required
          />
        </RegFormLabel>
        <RegFormLabel>
          Email
          <RegFormInput
            type="email"
            name="email"
            required
            placeholder="Enter email ..."
          />
        </RegFormLabel>
        <RegFormLabel>
          Password
          <RegFormInput
            type="password"
            name="password"
            required
            placeholder="Enter password ..."
          />
        </RegFormLabel>
        <RegFormButton type="submit">Register</RegFormButton>
      </RegFormStyled>
    </RegFormWrap>
  );
};

export default RegistrationForm;
