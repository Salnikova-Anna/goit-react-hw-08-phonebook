const RegistrationForm = ({ registration }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, email, password } = evt.target.elements;
    registration({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    console.log({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name ..."
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/."
          title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix. For example Taras@ukr.ua, adrian@gmail.com, JacobM3rcer@hotmail.com"
          required
          placeholder="Enter email ..."
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          // pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
          title="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. For example TgeV23592, 3Greioct."
          required
          placeholder="Enter password ..."
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
