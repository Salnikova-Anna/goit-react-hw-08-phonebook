import { useDispatch } from 'react-redux';
import {
  RegFormButton,
  RegFormInput,
  RegFormLabel,
  RegFormStyled,
  RegFormWrap,
} from './RegistrationForm.styled';
import { registrationThunk } from 'redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registrationThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <RegFormWrap>
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
