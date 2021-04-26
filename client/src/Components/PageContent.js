import React from 'react';
import { Button, Grid } from '@material-ui/core';
import useContactsAPI from '../Hooks/useContactsAPI';
import Contact from './Contact';

const PageContent = () => {
  const { contacts, loadMoreContacts } = useContactsAPI();
  console.log('contacts', contacts);
  return (
    <>
      <Grid container justify="center" spacing={3}>
        {contacts.map((contact) => (
          <Grid item xs={6} md={4} key={contact.id.value}>
            <Contact contact={contact} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button onClick={loadMoreContacts} variant="contained">
            Load More...
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default PageContent;
