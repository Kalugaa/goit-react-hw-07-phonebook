import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "store/contactsFilterSlice/contactsFilterSlice";
import { getFilter } from "store/selectors";

const ContactsSearch = () => {
  const dispatch = useDispatch()
  const filter = useSelector(getFilter)


  const handleChange = (e) => {
    const { value } = e.target

    dispatch(setFilter(value))
  }

  return (
    <div>
      <p
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: '15px',
          gap: '5px',
        }}
      >
        Find contact by name
        <input
          name="filter"
          value={filter}
          onChange={handleChange}
          style={{ maxWidth: '200px' }}
        ></input>
      </p>
    </div>
  );
};

export default ContactsSearch;
