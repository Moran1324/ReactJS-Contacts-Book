import React from 'react';
import {
  AppBar, Toolbar, Typography, InputBase,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import useContactsAPI from '../Hooks/useContactsAPI';

const useStyles = makeStyles({
  search: {
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: '#5765B5',
    '&:hover': {
      backgroundColor: '#6A75B5',
    },
    marginRight: '16px',
    marginLeft: '16px',
    maxWidth: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0px 16px',
  },
  searchIcon: {
    padding: '0px 0px',
    height: '100%',
    // position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: '8px 8px 8px 0px',
    // vertical padding + font size from searchIcon
    paddingLeft: '16px',
    width: '100%',
  },
  root: {
    flexGrow: 1,
    marginBottom: '16px',
  },
  logoText: {
    marginRight: '25vw',
  },
});

const NavBar = () => {
  const classes = useStyles();

  const { search, setSearch } = useContactsAPI();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.logoText}>
            Contact Book
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
