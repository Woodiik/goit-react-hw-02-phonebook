import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

export const ContactList = ({ visibleContacts, deleteContact }) => {
  return (
    <List>
      {visibleContacts.length > 0 &&
        visibleContacts.map(contact => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDeleteBtnClick={deleteContact}
            />
          );
        })}
    </List>
  );
};
