import { Form, Button } from "./Form.styled";
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contact-selectors';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const saveContact = name => {
    const newContact = {
      name: name,
      number: number,
    };

    if (contacts.find(us => us.name === newContact.name)) {
      toast.error('Ваш контакт уже есть в списке!');
      return;
    }
    dispatch(addContact(newContact));
    toast.success('Ваш контакт добавлен!');
  };

  const handleSubmit = e => {
    e.preventDefault();
    saveContact(name);
    setName('');
    setNumber('');
  };


    return (
      <Form onSubmit={handleSubmit}>
        <label>
          Name{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.currentTarget.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number{" "}
          <input
            type="tel"
            name="number"
            value={number}
            onChange={e => setNumber(e.currentTarget.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }


