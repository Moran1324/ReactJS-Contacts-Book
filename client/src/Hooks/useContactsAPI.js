import React, { useState, useEffect } from 'react';
import axios from 'axios';

const contactsUrl = 'https://randomuser.me/api/?results=9';
const contactsUrlFiltered = 'https://randomuser.me/api/?inc=gender,name,nat';

function useContactsAPI() {
  const [contacts, setContacts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const contactsUrlPagination = `https://randomuser.me/api/?page=${pageNumber}&results=9&seed=abc&inc=gender,name,phone,cell,picture,email`;

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

  return {
    contacts,
    loadMoreContacts,
  };
}

export default useContactsAPI;
