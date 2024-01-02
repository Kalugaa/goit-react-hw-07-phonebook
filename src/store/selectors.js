

export const getContacts = state => {
    return state.contacts.items;
};

export const getFilter = state => {
    return state.filter;
};

export const getIsLoading = state => state.contacts.isLoading;

export const getError = state => state.contacts.error;



