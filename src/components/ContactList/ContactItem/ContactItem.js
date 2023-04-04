import { DeleteButton, ListItem } from './ContactItem.styled';

export const ContactItem = ({ contact, onDeleteBtnClick }) => {
  const { id, name, number } = contact;
  return (
    <ListItem>
      {name}: {number}
      <DeleteButton type="button" onClick={() => onDeleteBtnClick(id)}>
        Delete
      </DeleteButton>
    </ListItem>
  );
};
