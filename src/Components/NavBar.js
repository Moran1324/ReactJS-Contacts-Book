import React from 'react';
import {
  AppBar, Toolbar, Typography, InputBase, Select, InputLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';
import { isMobile } from 'react-device-detect';
import useContactsAPI from '../Hooks/useContactsAPI';

const useStyles = makeStyles({
  search: {
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: '#5765B5',
    '&:hover': {
      backgroundColor: '#6A75B5',
    },
    marginRight: isMobile ? 'auto' : '16px',
    marginLeft: isMobile ? 'auto' : '16px',
    maxWidth: isMobile ? '35%' : '50%',
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
    marginRight: isMobile ? '0px' : '25vw',
    overflow: 'visible',
  },
  filterSelectContainer: {

  },
  filterSelect: {
    color: 'white',
    // color: '#9DA6D4',
    // backgroundColor: '#5765B5',
  },
  selectOption: {
    color: 'black',
  },
});

const NavBar = () => {
  const classes = useStyles();

  const {
    search, setSearch, filter, setFilter,
  } = useContactsAPI();

  const handleSearchInputChange = (value) => {
    setSearch(value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.logoText}>
            {isMobile ? 'Contacts' : 'Contact Book'}
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
              onChange={(e) => handleSearchInputChange(e.target.value)}
            />
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
          <div className={classes.filterSelectContainer}>
            <Select
              className={classes.filterSelect}
              native
              value={filter}
              onChange={(e) => handleFilterChange(e.target.value)}
              defaultValue="all"
              inputProps={{
                name: 'gender',
                id: 'gender-native-simple',
              }}
            >
              <option className={classes.selectOption} value="all">All Genders</option>
              <option className={classes.selectOption} value="male">Male</option>
              <option className={classes.selectOption} value="female">Female</option>
            </Select>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
