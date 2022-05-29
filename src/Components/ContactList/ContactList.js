import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, removeContact } from 'redux/contacts/contacts-operations';
import { getFilterContacts } from 'redux/contacts/contact-selectors';
import { Item, Button } from "./ContactList.styled";

export const ContactList = () => {
 
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name}: {number}
          </p>

          <Button
            type="button"
            id={id}
            onClick={() => dispatch(removeContact(id))}
          >
            Delete
          </Button>
        </Item>
      ))}
    </ul>
  );
};
