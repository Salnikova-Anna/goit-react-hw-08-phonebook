import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { selectContacts, selectFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter?.toLowerCase())
  );

  const handleDeleteButton = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.contactItem}>
          {`${contact.name}: ${contact.number} `}
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => handleDeleteButton(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
