import s from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/slice';

import { useEffect } from 'react';
import {
  deleteContactThunk,
  fetchContacts,
} from '../../redux/contacts/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(selectContacts);
  console.log(contactsItems);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilterValue = () => {
    return contactsItems.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const contacts = getFilterValue();
  return (
    <div>
      <ul className={s.contactsList}>
        {contacts.map(contact => (
          <li className={s.contactLi} key={contact.id}>
            {contact.name}: {contact.phone}
            <button
              onClick={() => dispatch(deleteContactThunk(contact.id))}
              className={s.btnLi}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
