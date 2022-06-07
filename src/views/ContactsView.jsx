import ContactForm from "../Components/Form/Form";
import { ContactList } from "Components/ContactList/ContactList";
import Filter from "../Components/Filter/Filter";
import { Container } from "./styles/Contacts.styled";
import Typography from '@mui/material/Typography';

const ContactsView = () => {
    return (
        <Container>
            <ContactForm />
            <Typography component="h1" variant="h5">
          Contacts
        </Typography>
            <Filter />
            <ContactList />
        </Container>
    )
};

export default ContactsView;