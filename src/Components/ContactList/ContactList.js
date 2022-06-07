import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts, removeContact } from 'redux/contacts/contacts-operations';
import { getFilterContacts } from 'redux/contacts/contact-selectors';
import { Name, Number, Container, List } from "./ContactList.styled";
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Grid,
  IconButton,
  ListItem,
} from '@mui/material';

export const ContactList = () => {
 
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <List>
        <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Name>{name}:</Name>
        <Number>{number}</Number>

           
          <IconButton
            edge="end"
            aria-label="delete"
            id={id}
            onClick={() => dispatch(removeContact(id))}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
          </Grid>
    </List>
    </Container>
  );
};