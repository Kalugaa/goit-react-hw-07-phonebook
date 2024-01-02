import AddContactForm from './AddContactForm/AddContactForm';
import ContactsSearch from './ContactsSearch/ContactsSearch';

import Section from './Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'store/operations';
import { getContacts, getError, getIsLoading } from 'store/selectors';
import ContactList from './ContactList/ContactList';






const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const contacts = useSelector(getContacts)


  const isLoading = useSelector(getIsLoading)
  const isError = useSelector(getError)





  if (isLoading) {
    return <div>Is Loading...</div>
  }
  if (isError) {
    return <div>Error, please reload this page{isError.message}</div>
  }


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: 40,
        color: '#010101',
        paddingLeft: '25px',
      }}
    >
      <AddContactForm />
      <Section title={'Contacts'}>
        <ContactsSearch />
        {contacts && <ContactList />}
      </Section>
    </div>
  );
};

export default App;
