import React from 'react';
import { Button } from '@material-ui/core';
import useContactsAPI from '../Hooks/useContactsAPI';

const PageContent = () => {
  const { contacts, loadMoreContacts } = useContactsAPI();
  console.log('contacts', contacts);
  return (
    <>
      <div>
        Page Content
      </div>
      <Button onClick={loadMoreContacts} variant="contained">
        Load More...
      </Button>
    </>
  );
};

export default PageContent;
