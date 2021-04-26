import React, { useContext } from 'react';
import { ContactsContext } from './ContactsApiContext';

function useContactsAPI() {
  return useContext(ContactsContext);
}

export default useContactsAPI;
