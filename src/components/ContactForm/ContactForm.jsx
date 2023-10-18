import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const name = evt.target.elements.name.value;
    const number = evt.target.elements.number.value;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContact(contact));

    evt.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.inputWrap}>
        <label htmlFor="exampleInputName1" className={css.formLabel}>
          Name
        </label>
        <input
          type="text"
          name="name"
          value={contacts.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="formInput"
          id="exampleInputName1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className={css.inputWrap}>
        <label htmlFor="exampleInputNumber1" className={css.formLabel}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          value={contacts.number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="formInput"
          id="exampleInputNumber1"
          aria-describedby="emailHelp"
        />
      </div>

      <button type="submit" className={css.btnSubmit}>
        Add contact
      </button>
    </form>
  );
};
