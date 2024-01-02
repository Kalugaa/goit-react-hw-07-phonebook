import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './contactsFilterSlice/contactsFilterSlice';
import { contactReducer } from './contacts/contactsSlice';



const reducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
});

export const store = configureStore({ reducer });
