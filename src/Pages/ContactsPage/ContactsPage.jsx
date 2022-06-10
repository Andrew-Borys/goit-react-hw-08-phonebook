import Title from 'components/Title';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
import { Wrapper, Section } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <Wrapper>
      <Section>
        <Title text={'Phonebook'} />
        <ContactForm />
      </Section>
      <Section>
        <Title text={'Contacts'} />
        <Filter />
        {/* <ContactList /> */}
      </Section>
    </Wrapper>
  );
};

export default ContactsPage;
