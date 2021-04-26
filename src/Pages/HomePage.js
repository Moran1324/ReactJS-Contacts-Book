import React from 'react';
import { Grid } from '@material-ui/core';
import NavBar from '../Components/NavBar';
import PageContent from '../Components/PageContent';

const HomePage = () => {
  const data = 'data';
  return (
    <div className="homepage">
      <NavBar />
      <Grid container>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <PageContent />
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
    </div>
  );
};

export default HomePage;
