import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import useContactsAPI from '../Hooks/useContactsAPI';
import Contact from './Contact';

const useStyles = makeStyles({
  root: {
    margin: '64px 8px 0px 8px',
  },
});

const PageContent = () => {
  const { contacts, loadMoreContacts, search } = useContactsAPI();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={3}>
        {contacts.map((contact) => {
          // search functionallity
          let appearsInSearch = false;
          const fullName = `${contact.name.first} ${contact.name.last}`;

          if (fullName.includes(search)) {
            appearsInSearch = true;
          }
          if (contact.email.includes(search)) {
            appearsInSearch = true;
          }
          if (contact.phone.includes(search)) {
            appearsInSearch = true;
          }
          if (contact.cell.includes(search)) {
            appearsInSearch = true;
          }

          if (search.length < 1) {
            appearsInSearch = false;
          }
          return (
            <Grid item xs={11} md={4} key={contact.id.value ? contact.id.value : Math.random()}>
              <Contact contact={contact} highlight={appearsInSearch} />
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <Button onClick={loadMoreContacts} variant="contained">
            Load More...
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default PageContent;
