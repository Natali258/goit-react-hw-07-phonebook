import s from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectIsLoading } from '../../redux/contacts/slice';

import { useEffect } from 'react';
import {
  deleteContactThunk,
  fetchContacts,
} from '../../redux/contacts/operations';
import { selectFilter } from '../../redux/filterSlice/filterSlice';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contactsItems = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);

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
      {isLoading && <h1>Loading.....</h1>}
    </div>
  );
};
