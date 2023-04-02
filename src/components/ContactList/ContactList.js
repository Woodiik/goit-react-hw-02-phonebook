import { ContactItem } from './ContactItem';

export const ContactList = ({ visibleContacts }) => {
  return (
    <ul>
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};
