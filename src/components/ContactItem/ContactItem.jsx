import PropTypes from 'prop-types';
import { ListItem, DeleteButton } from './ContactItem.styled';
import { FiDelete } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDeleteContactMutation } from 'redux/Contacts/ContactsApi';

const ContactItem = ({ contact }) => {
  const [deleteContact, { isSuccess }] = useDeleteContactMutation();
  return (
    <ListItem>
      {contact.name}: {contact.number}
      {isSuccess && Notify.info(`Contact was deleted!`)}
      <IconContext.Provider value={{ color: 'red', size: '18px' }}>
        <DeleteButton type="button" onClick={() => deleteContact(contact.id)}>
          <FiDelete />
        </DeleteButton>
      </IconContext.Provider>
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object,
};

export default ContactItem;
