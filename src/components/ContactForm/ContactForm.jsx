import React, { useState } from 'react';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/slice';
import { addContactThunk } from '../../redux/contacts/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const addFormContact = e => {
    e.preventDefault();
    const isExist = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(
      addContactThunk({
        name,
        phone,
      })
    );

    setName('');
    setPhone('');
  };

  return (
    <div>
      <form onSubmit={addFormContact} className={s.forma}>
        <span className={s.label}>Name</span>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          required
          className={s.input}
        />
        <span className={s.label}>Number</span>
        <input
          value={phone}
          onChange={e => setPhone(e.target.value)}
          type="tel"
          name="phone"
          required
          className={s.input}
        />
        <button type="submit" className={s.dtnAdd}>
          Add contact
        </button>
      </form>
    </div>
  );
};
