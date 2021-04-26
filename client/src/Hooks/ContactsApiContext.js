import React, {
  useState, useEffect, createContext, useContext,
} from 'react';
import axios from 'axios';

export const ContactsContext = createContext();

export default function ContactsAPIProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [contactsBackup, setContactsBackup] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const contactsUrlPagination = `https://randomuser.me/api/?page=${pageNumber}&results=9&seed=abc&inc=gender,name,phone,cell,picture,email,id`;

  useEffect(() => {
    const getContacts = async () => {
      const { data } = await axios.get(contactsUrlPagination);
      if (filter === 'all') {
        setContacts((prevState) => [...prevState, ...data.results]);
        setContactsBackup((prevState) => [...prevState, ...data.results]);
      } else {
        setContacts((prevState) => [...prevState, ...data.results
          .filter((contact) => contact.gender === filter)]);
        setContactsBackup((prevState) => [...prevState, ...data.results]);
      }
      console.log('contacts', contacts);
    };
    getContacts();
  }, [pageNumber]);

  const loadMoreContacts = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  useEffect(() => {
    if (filter === 'all' && contacts.length !== contactsBackup.length) {
      setContacts(contactsBackup);
    }
    if (filter === 'male') {
      setContacts(contactsBackup.filter((contact) => contact.gender === 'male'));
    }
    if (filter === 'female') {
      setContacts(contactsBackup.filter((contact) => contact.gender === 'female'));
    }
  }, [filter]);

  const value = {
    contacts, loadMoreContacts, search, setSearch, filter, setFilter,
  };

  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
}
