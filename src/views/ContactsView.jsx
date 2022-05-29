import ContactForm from "../Components/Form/Form";
import { ContactList } from "Components/ContactList/ContactList";
import Filter from "../Components/Filter/Filter";
import { Toaster } from 'react-hot-toast';
import "./styles/Contacts.css";

const ContactsView = () => {
    return (
        <div className="Contacts">
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
            <Toaster />
        </div>
    )
};

export default ContactsView;