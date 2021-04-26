import React, {
  useState, useEffect, createContext, useContext,
} from 'react';
import axios from 'axios';

export const ContactsContext = createContext();

export default function ContactsAPIProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');

  const contactsUrlPagination = `https://randomuser.me/api/?page=${pageNumber}&results=9&seed=abc&inc=gender,name,phone,cell,picture,email,id`;

  useEffect(() => {
    const getContacts = async () => {
      const { data } = await axios.get(contactsUrlPagination);
      setContacts((prevState) => [...prevState, ...data.results]);
    };
    getContacts();
  }, [pageNumber]);

  const loadMoreContacts = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const value = {
    contacts, loadMoreContacts, search, setSearch,
  };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
}
