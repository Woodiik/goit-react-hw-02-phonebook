export const ContactItem = ({ contact }) => {
  return (
    <li>
      {contact.name}: {contact.number}
    </li>
  );
};
