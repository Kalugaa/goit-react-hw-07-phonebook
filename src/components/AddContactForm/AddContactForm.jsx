
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { addContact } from "store/operations";
import { getContacts } from "store/selectors";

const AddContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contactsList = useSelector(getContacts);
  const onInputChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    } else if (target.name === 'phone') {
      setPhone(target.value);
    }
  };
  const handleSubmit = event => {
    event.preventDefault();
    const isExistName = contactsList.some(
      contact =>
        contact.name &&
        typeof contact.name === 'string' &&
        contact.name.toLowerCase() === name.toLowerCase()
    );
    const isExistPhone = contactsList.some(
      contact =>
        contact.phone &&
        typeof contact.phone === 'string' &&
        contact.phone === phone
    );
    if (isExistName) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (isExistPhone) {
      alert(`${phone} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <>
      <h1
        style={{
          margin: '10px 0 10px 0',
          fontSize: '35px',
        }}
      >
        Phonebook
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          fontSize: '15px',
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          border: 'black 1px solid',
          padding: '15px',
        }}

      >
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          Name
          <input type="text"
            name="name"
            value={name}
            required
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={onInputChange} />
        </label>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          Number
          <input type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
            value={phone}
            onChange={onInputChange} />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default AddContactForm;
