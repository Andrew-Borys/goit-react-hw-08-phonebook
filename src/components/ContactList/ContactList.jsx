import ContactItem from '../ContactItem';
import { List } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/Contacts/ContactsApi';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const ContactList = ({ filter }) => {
  const { data: contacts, isLoading } = useGetContactsQuery();

  const onFindContact = () => {
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = onFindContact();

  return (
    <>
      {isLoading ? (
        Loading.dots('Loading contacts list...')
      ) : (
        <List>
          {!isLoading && Loading.remove()}
          {filteredContacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
