import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "store/operations";

import { getContacts, getFilter } from "store/selectors";

const ContactList = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const [filteredContacts, setFilteredContacts] = useState([]);


  useEffect(() => {
    if (filter) {
      const filtered = contacts.filter(contact =>

        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts);
    }
  }, [filter, contacts]);


  const deleteContactById = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <>
      <ul
        style={{
          margin: '0',
          padding: '0',
        }}
      >
        {filteredContacts && filteredContacts.map(contact => (
          <li
            key={contact.id}
            style={{
              fontSize: '25px',
              display: 'flex',
              flexDirection: 'row',
              gap: '15px',
            }}
          >
            {contact.name} {contact.phone}
            <button onClick={() => deleteContactById(contact.id)}>Delete</button>
          </li>
        ))}


      </ul>
    </>
  );
};
export default ContactList;


